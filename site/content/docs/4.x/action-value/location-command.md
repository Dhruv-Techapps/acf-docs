---
layout: docs
title: Location Command
description: Perform location specific commands
group: action-value
toc: true
---

{{<img location-command.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">LocationCommand::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">LocationCommand::reload</th>
      <td>Force reloading the current page from the server.</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::href::https://getautoclicker.com</th>
      <td>it will open https://getautoclicker.com in same tab</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::replace::https://getautoclicker.com</th>
      <td>It will open this page without maintaining history so when you click back you can come to this page again</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::assign::https://getautoclicker.com</th>
      <td>Its similar to you click on link which open another page</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::focus</th>
      <td>Its similar to you focus on window/page</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::blur</th>
      <td>Its similar to you move out on window/page</td>
    </tr>
     <tr>
      <th scope="row">LocationCommand::print</th>
      <td>Its similar to you Print (Ctrl + P) out on window/page</td>
    </tr>
     <tr>
      <th scope="row">LocationCommand::stop</th>
      <td>Its similar to you stop window/page load</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::moveBy::x,y</th>
      <td>Its similar to move window/page by x and y pixels</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::moveTo::x,y</th>
      <td>Its similar to move window/page to x and y pixels</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::open::https://getautoclicker.com</th>
      <td>Its similar to open https://getautoclicker.com page in new tab</td>
    </tr>
  </tbody>
</table>