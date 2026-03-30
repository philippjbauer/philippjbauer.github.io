---
layout: default
title: Home
---

{% if site.posts.size > 0 %}
  {% assign latest = site.posts | first %}
  <span class="post-meta">{{ latest.date | date: "%B %d, %Y" }}</span>
  {{ latest.content }}
  <p><a class="read-more" href="{{ latest.url | relative_url }}">Permalink &rarr;</a></p>
{% endif %}
