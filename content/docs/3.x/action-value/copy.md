---
layout: docs
title: Copy
description: Now you can copy any content from webpage using copy command and paste back any where within same domain.
group: action-value
toc: true
---

{{<img copy-command.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col"  width="210px">Copy::</th>
      <th scope="col">Description (Copy text from webpage)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Copy::[.]{6}</th>
      <td>
        <code>[.]</code> - Any Single Character <code>{6}</code> - no of characters 6
      </td>
    </tr>
    <tr>
      <th scope="row">Copy::[.]+</th>
      <td>
        <code>[.]</code> - Any Single Character <code>+</code> - all characters
      </td>
    </tr>
    <tr>
      <th scope="row">Copy::[a-z]{6}</th>
      <td>
        <code>[a-z]</code> - A character in the range: a-z
      </td>
    </tr>
    <tr>
      <th scope="row">Copy::[A-Z]{6}</th>
      <td>
        <code>[A-Z]</code> - A character in the range: A-Z
      </td>
    </tr>
    <tr>
      <th scope="row">Copy::[\d]{6}</th>
      <td>
        <code>[\d]</code> - A digit
      </td>
    </tr>
    <tr>
      <th scope="row">Copy::[\w]{6}</th>
      <td>
        <code>[\w]</code> - A word character
      </td>
    </tr>
  </tbody>
</table>