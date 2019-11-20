---
layout: container
title: Blog
---
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url}}">{{ post.title }} {% if post.status %}<span class='text-warning'>- {{post.status}}</span>{% endif %}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>