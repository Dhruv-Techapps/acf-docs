
---
layout: docs
title: Captcha [PRO Feature]
description: Resolve image captcha using AI
group: action-value
toc: true
---
### Captcha Problem
{{<img captcha-image.png>}}

### Captcha HTML with Inspect
{{<img captcha-html.png>}}

### Captcha Configuration
{{<img captcha-config.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">Image::</th>
      <th scope="col">Element Finder of the image contains captcha</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Image:://img[@class="captcha-img"]</th>
      <td>This will capture the image content and send to vision AI of and resolve the image into text and it will get filled in the element finder of action</td>
    </tr>
  </tbody>
</table>