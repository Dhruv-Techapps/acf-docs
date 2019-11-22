---
layout: container
title: Blog
---
{% for post in site.posts %}
###  [{{ post.title }}]({{ post.url | relative_url}})

{:.mb-5}
{{ post.excerpt }}
{% endfor %}