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

<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-list-item">
    <span class="post-meta">{{ post.date | date: "%B %d, %Y" }}</span>
    <h2 class="post-list-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
    <a class="read-more" href="{{ post.url | relative_url }}">Read more &rarr;</a>
  </li>
  {% endfor %}
</ul>
