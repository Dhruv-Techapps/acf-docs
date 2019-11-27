---
layout: container
title: Blog
---
{% for post in site.posts %}
###  [{{ post.title }}]({{ post.url | relative_url}}) {% if post.status %}<span class='text-warning'>- {{post.status}}</span>{% endif %}

{:.mb-5}
{{ post.excerpt }}
{% endfor %}