---
layout: docs
title: Extension Load
description: If an action need to be performed on button / input field which is inside iframe you must check this checkbox which enables check of iframe content as well.
group: configuration-settings
toc: true
---

{{<img configuration-settings-auto.png>}}

<table class="table">
  <thead>
    <tr>
      <th>Event Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload">Window</a>
      </td>
      <td>true</td>
      <td>
        <ul>
          <li>Extension is loaded when all content of page is loaded e.g. stylesheets, images, sub forms</li>
          <li>Slower than Document</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event">Document</a>
      </td>
      <td>false</td>
      <td>
        <ul>
          <li>Extension is loaded without waiting for stylesheets, images, and subframes to finish loading</li>
          <li>Faster than Window</li>
        </ul>
    </tr>
  </tbody>
</table>