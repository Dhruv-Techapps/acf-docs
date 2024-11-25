---
layout: docs
title: Status Bar
description: Extension status now can be tracked in much better way
group: extension
toc: true
---

The status of the configuration is now shown by default at the bottom right of the page. This can be disabled or repositioned from the global settings.
{{<img status-bar.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">Icon</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">🅱️1</th>
      <td>`🅱️` represents batch and `1` represents the index of the batch, which starts from 1.</td>
    </tr>
    <tr>
      <th scope="row">🅰️1</th>
      <td>`🅰️` represents action and `1` represents the action number, which starts from 1.</td>
    </tr>
    <tr>
      <th scope="row">❓</th>
      <td>While checking the condition from the addon, it is represented by `❓`.</td>
    </tr>
    <tr>
      <th scope="row">🔁 "addon" | "action"</th>
      <td>Addon or action repeat is represented by `🔁 "addon" | "action"`.</td>
    </tr>
    <tr>
      <th scope="row">🔍</th>
      <td>Represents the element finder is finding the element when it is not found.</td>
    </tr>
    <tr>
      <th scope="row">🕒</th>
      <td>Represents the wait time for all init wait, repeat interval, retry interval.</td>
    </tr>
    <tr>
      <th scope="row">Done</th>
      <td>Represents the action is completed successfully.</td>
    </tr>
  </tbody>
</table>