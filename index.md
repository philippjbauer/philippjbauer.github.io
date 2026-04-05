---
layout: default
title: Home
---

{% if site.posts.size > 0 %}
<article class="post">
  {% assign latest = site.posts | first %}
  <span class="post-meta">{{ latest.date | date: "%B %d, %Y" }}</span>
  <h1>{{ latest.title }}</h1>
  {% include post-hero.html image=latest.image image_alt=latest.image_alt %}
  {{ latest.content }}
  <p><a class="read-more" href="{{ latest.url | relative_url }}">Permalink &rarr;</a></p>
</article>

{% if site.posts.size > 1 %}
<hr style="border:none;border-top:1px solid var(--border);margin:3em 0 2em">
<h2 style="font-family:Merriweather,serif;font-size:1rem;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:var(--muted);margin:0 0 1.5em">All articles</h2>
<ul class="post-list">
  {% for post in site.posts offset:1 %}
  <li class="post-list-item">
    <span class="post-meta">{{ post.date | date: "%B %d, %Y" }}</span>
    <h3 class="post-list-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    {% if post.description %}<p class="post-excerpt">{{ post.description }}</p>{% endif %}
    <a class="read-more" href="{{ post.url | relative_url }}">Read &rarr;</a>
  </li>
  {% endfor %}
</ul>
{% endif %}
{% endif %}
