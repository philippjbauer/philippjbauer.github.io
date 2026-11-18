#!/usr/bin/env python3
"""Render resume.html to resume.pdf.

Uses the page's own @page rule (US Letter, 0.5in/0.6in margins) rather than passing
page margins here, so the PDF and the HTML stay in one place. print_background is off:
the résumé draws its rules with borders, not backgrounds, so nothing is lost, and the
file stays text-first for ATS parsers.

Requires playwright's chromium:  python3 -m playwright install chromium
"""

from pathlib import Path
from playwright.sync_api import sync_playwright

HERE = Path(__file__).resolve().parent
SOURCE = HERE / "resume.html"
OUT = HERE / "resume.pdf"


def main() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(SOURCE.as_uri(), wait_until="networkidle")
        page.pdf(path=str(OUT), prefer_css_page_size=True, print_background=False)
        browser.close()
    print(f"wrote {OUT} ({OUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
