---
layout: docs
title: Icon
description: Extension status now can be tracked in much better way
group: extension
toc: true
---

<table class="table">
  <thead>
    <tr>
      <th scope="col">Icon</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{<img icon-batch-action.png 50px>}}</th>
      <td>{{<markdown>}}`8-1` where the first number represents the [batch]({{<docsref "/batch/overview">}}) index and the second number represents the [action]({{<docsref "/action/overview">}}) index.{{</markdown>}}</td>
    </tr>
    <tr>
      <th scope="row">{{<img icon-done.png 50px>}}</th>
      <td>{{<markdown>}}Once extension successfully completes all action and batch it shows `Done`{{</markdown>}}</td>
    </tr>
    <tr>
      <th scope="row">{{<img icon-retry.png 50px>}}</th>
      <td>{{<markdown>}}If any configured element is not found on page and extension is [retry]({{<docsref "/settings/retry">}}) to find same it shows as this icon{{</markdown>}}</td>
    </tr>
    <tr>
      <th scope="row">{{<img icon-error.png 50px>}}</th>
      <td>{{<markdown>}}If an extension do not able to find element after retry also it will show [error handling]({{<docsref "/settings/error-handling">}}) status and stops{{</markdown>}}</td>
    </tr>
    <tr>
      <th scope="row">{{<img icon-black.png 50px>}}</th>
      <td>{{<markdown>}}If extension do not find any configuration matching current tab [URL]({{<docsref "/configuration/url">}}) it will turn grey{{</markdown>}}</td>
    </tr>
    <tr>
      <th scope="row">{{<img icon-manual.png 50px>}}</th>
      <td>{{<markdown>}}If extension is set for [Manual Start]({{<docsref "/config-settings/start">}}){{</markdown>}} </td>
    </tr>
    <tr>
      <th scope="row">{{<img icon-auto.png 50px>}}</th>
      <td>{{<markdown>}}If extension is set for auto start{{</markdown>}}</td>
    </tr>
  </tbody>
</table>