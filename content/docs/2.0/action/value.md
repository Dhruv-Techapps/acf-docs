---
layout: docs
title: Value
description: Now you can perform much more than just click or fill form elements. an element referred in below table is one which is found by `Xpath`
group: action
toc: true
---

## Scroll To Examples

{{<img scroll-to.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">ScrollTo::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">XPath</th>
      <td>It will scroll the page to element.</td>
    </tr>
    <tr>
      <th scope="row">Top | TopLeft</th>
      <td>It will scroll the page to Top Left position.</td>
    </tr>
    <tr>
      <th scope="row">TopRight</th>
      <td>It will scroll the page to Top Right position.</td>
    </tr>
    <tr>
      <th scope="row">Bottom | BottomLeft</th>
      <td>It will scroll the page to Bottom Left position.</td>
    </tr>
    <tr>
      <th scope="row">BottomRight</th>
      <td>It will scroll the page to Bottom Right position.</td>
    </tr>
  </tbody>
</table>


## Click Events Examples

{{<img click-events.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">ClickEvents::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">click</th>
      <td>It will click the element.</td>
    </tr>
    <tr>
      <th scope="row">dblclick</th>
      <td>It will double click the element.</td>
    </tr>
  </tbody>
</table>


## Form Events Examples

{{<img form-events.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">FormEvents::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">blur</th>
      <td>It will trigger blur event on the element.<br> It removed focus from the element.</td>
    </tr>
    <tr>
      <th scope="row">focus</th>
      <td>It will trigger focus event on the element.</td>
    </tr>
    <tr>
      <th scope="row">select</th>
      <td>It will trigger select event on the element.<br> In input field and textarea it will select the text inside</td>
    </tr>
    <tr>
      <th scope="row">clear</th>
      <td>It will trigger clear event on the element.<br> It clears field value.</td>
    </tr>
    <tr>
      <th scope="row">remove</th>
      <td>It will remove element.</td>
    </tr>
    <tr>
      <th scope="row">submit</th>
      <td>It will submit the form in which element is present.</td>
    </tr>
  </tbody>
</table>

{{<callout info>}}
You can also perform more than one task in series e.g
{{</callout>}}

{{<img multiple-events.png>}}