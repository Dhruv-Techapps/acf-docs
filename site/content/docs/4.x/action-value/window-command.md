
---
layout: docs
title: Window Command
description: Window specific command
group: action-value
toc: true
---

{{<img window-command.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">WindowCommand::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">WindowCommand::close</th>
      <td>Close current page only works if page is opened through script and not manually.</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::focus</th>
      <td>Its similar to you focus on window/page</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::blur</th>
      <td>Its similar to you move out on window/page</td>
    </tr>
     <tr>
      <th scope="row">WindowCommand::print</th>
      <td>Its similar to you Print (Ctrl + P) out on window/page</td>
    </tr>
     <tr>
      <th scope="row">WindowCommand::stop</th>
      <td>Its similar to you stop window/page load</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::moveBy::x,y</th>
      <td>Its similar to move window/page by x and y pixels</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::moveTo::x,y</th>
      <td>Its similar to move window/page to x and y pixels</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::open::https://getautoclicker.com</th>
      <td>Its similar to open https://getautoclicker.com page in new tab</td>
    </tr>
  </tbody>
</table>
<hr/>

{{<callout info>}}
You can also perform more than one task in series e.g
{{</callout>}}

{{<img multiple-events.png>}}