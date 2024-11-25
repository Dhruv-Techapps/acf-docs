---
layout: docs
title: Action · Iframe First
description: If an action need to be performed on button / input field which is inside iframe you can check this checkbox which check within iframe first and then in main page. which saves lot of time. 
group: action-settings
toc: true
---

default is unchecked its applicable to iframe which do not have url in src attribute. example 
- &lt;iframe src="about:blank">&lt;/iframe>
- &lt;iframe src="">&lt;/iframe>

If there is url in the src attribute consider creating new configuration with targeted url.


{{<img iframe-first.png>}}