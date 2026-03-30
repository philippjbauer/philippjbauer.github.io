---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

{% if site.posts.size > 0 %}
  {% assign latest_post = site.posts | first %}
  
  <div class="latest-post">
    <p class="post-meta">{{ latest_post.date | date: "%B %d, %Y" }}</p>
    {{ latest_post.content }}
  </div>
{% endif %}
