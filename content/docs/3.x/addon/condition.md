---
layout: docs
title: Condition
description: Add condition which you can check before performing action
group: addon
toc: true
---

You can specify what condition you need to apply.<br/>
(a) - value or text of xpath element<br/>
(b) - value provided in configuration page field.

<table class="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Equals</td>
      <td>String | Number</td>
      <td>(a) should be equal to (b)</td>
    </tr>
    <tr>
      <td>Contains</td>
      <td>String | Number</td>
      <td>(a) contains (b)</td>
    </tr>
    <tr>
      <td>Greater Than</td>
      <td>Number</td>
      <td>(a) is greater than (b)</td>
    </tr>
    <tr>
      <td>Lesser Than</td>
      <td>Number</td>
      <td>(a) is lesser than (b)</td>
    </tr>
    <tr>
      <td>Greater Than Equals</td>
      <td>Number</td>
      <td>(a) is greater than or equals to (b)</td>
    </tr>
    <tr>
      <td>Lesser Than Equals</td>
      <td>Number</td>
      <td>(a) is lesser than or equals to (b)</td>
    </tr>
  </tbody>
</table>