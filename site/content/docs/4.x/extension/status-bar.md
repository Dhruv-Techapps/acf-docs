---
layout: docs
title: Status Bar
description: Track configuration and execution status from a compact on-page status bar
group: extension
toc: true
---

The configuration status appears by default at the bottom-right of the page. You can disable or reposition it from global settings.
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
  <td>`🅱️` denotes the batch; `1` is the current batch index (1‑based).</td>
    </tr>
    <tr>
      <th scope="row">🅰️1</th>
  <td>`🅰️` denotes the action; `1` is the current action index (1‑based).</td>
    </tr>
    <tr>
      <th scope="row">❓</th>
  <td>Addon condition check in progress.</td>
    </tr>
    <tr>
      <th scope="row">🔁 "addon" | "action"</th>
  <td>Repeat in progress for the specified scope: <code>addon</code> or <code>action</code>.</td>
    </tr>
    <tr>
      <th scope="row">🔍</th>
  <td>Element Finder is searching for the target element (not yet found).</td>
    </tr>
    <tr>
      <th scope="row">🕒</th>
  <td>Waiting (Init Wait, Repeat Interval, or Retry Interval).</td>
    </tr>
    <tr>
      <th scope="row">Done</th>
  <td>Action completed successfully.</td>
    </tr>
  </tbody>
</table>