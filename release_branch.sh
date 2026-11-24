#!/usr/bin/env bash
# Squash a ref into one root commit on a new branch, for publishing the site
# without its history. Uses git commit-tree so HEAD, the index and the working
# tree are never touched; the new commit gets the exact tree of the ref, so the
# published content is byte-identical to what is checked out.
#
#   ./release_branch.sh                     # release/<sha> from HEAD
#   ./release_branch.sh main --short --push
#
# The release commit is not a descendant of your history: GitHub shows it as an
# unrelated root commit and it cannot be merged back. That is intended.

set -euo pipefail

program=${0##*/}

die() {
  printf '%s: %s\n' "$program" "$1" >&2
  exit 1
}

warn() {
  printf '%s: warning: %s\n' "$program" "$1" >&2
}

usage() {
  cat <<'EOF'
Usage: release_branch.sh [options] [ref]

Create a branch whose only commit is a root commit holding the tree of <ref>
(default HEAD), with the message "Release commit <sha of ref>".

<ref> is any revision. In a fresh clone only the checked-out branch is local, so
use origin/main rather than main for a branch you have not checked out.

Options:
  -n, --name NAME   branch name (default: release/<7-char sha>)
  -s, --short       use the 7-char sha in the message instead of the full sha
  -f, --force       replace the branch if it already exists
  -p, --push        push to origin and set upstream after creating it
  -d, --dry-run     show what would happen, change nothing
  -h, --help        show this help
EOF
}

ref=HEAD
branch=
message_sha_full=1
force=0
push=0
dry_run=0

while (($#)); do
  case $1 in
    -n | --name)
      (($# >= 2)) || die "$1 requires a value"
      branch=$2
      shift 2
      ;;
    -s | --short)
      message_sha_full=0
      shift
      ;;
    -f | --force)
      force=1
      shift
      ;;
    -p | --push)
      push=1
      shift
      ;;
    -d | --dry-run)
      dry_run=1
      shift
      ;;
    -h | --help)
      usage
      exit 0
      ;;
    -*)
      usage >&2
      exit 2
      ;;
    *)
      [[ -z $ref || $ref == HEAD ]] || die "only one ref may be given"
      ref=$1
      shift
      ;;
  esac
done

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || die "not a git repository"
sha=$(git rev-parse --verify "$ref^{commit}" 2>/dev/null) || die "no such ref: $ref"
tree=$(git rev-parse "$sha^{tree}")
short=$(printf '%s' "$sha" | cut -c1-7)
if ((message_sha_full)); then
  message="Release commit $sha"
else
  message="Release commit $short"
fi
branch=${branch:-release/$short}

# The snapshot is the ref's committed tree, so anything uncommitted is left out.
if [[ -n $(git status --porcelain) ]]; then
  warn "working tree is dirty; uncommitted changes are NOT in the release commit"
fi

if git show-ref --verify --quiet "refs/heads/$branch" && ((!force)); then
  die "branch '$branch' already exists at $(git rev-parse --short "$branch") (use --force to replace it)"
fi

if ((dry_run)); then
  printf 'dry run, nothing created\n'
  printf '  ref      %s (%s)\n' "$ref" "$sha"
  printf '  tree     %s\n' "$tree"
  printf '  branch   %s\n' "$branch"
  printf '  message  %s\n' "$message"
  exit 0
fi

new=$(git commit-tree "$tree" -m "$message")
if ((force)); then
  git branch -f "$branch" "$new"
else
  git branch "$branch" "$new"
fi

# A release commit that kept its parents or changed the tree would be a silent lie.
read -r _commit parents <<<"$(git rev-list --parents -n1 "$branch")"
if [[ -n ${parents:-} ]]; then
  die "$branch unexpectedly has parents: $parents"
fi
if ! git diff --quiet "$branch" "$sha"; then
  die "$branch does not match the tree of $sha"
fi

printf 'created %s (%s)\n' "$branch" "$(git rev-parse --short "$new")"
printf '  message: %s\n' "$message"
printf '  history: 1 commit, no parents, tree identical to %s\n' "$(git rev-parse --short "$sha")"

if ((push)); then
  if ((force)); then
    git push --force-with-lease -u origin "$branch"
  else
    git push -u origin "$branch"
  fi
  printf 'pushed to origin\n'
else
  printf 'next: git push -u origin %s\n' "$branch"
fi
