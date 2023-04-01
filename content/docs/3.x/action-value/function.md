
---
layout: docs
title: Function
description: Perform browser specific functions using `func::` command its limited to browser specific functions only and not user defined.
group: action-value
toc: true
---


<span class="badge bg-danger">Dev</span>
<span>Now run browser default API functions or custom func from extension directly. This feature is still under development and we will provide better location to run command from action. Run one or more than one command by separating them using `;` <br/>`Func::console.log("Hello");console.log("World");`</span>

{{<img func-command.png>}}

{{<callout danger>}}

#### Func methods

One important warning in advance: Malicious scripts can violate your privacy and act on your behalf!

- You should create script own. for simpler functionality like calling a function and all.
- If you not sure how to what all functions are available then You should only run scripts from sources you trust.
{{</callout>}}