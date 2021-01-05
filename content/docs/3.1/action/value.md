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


## Click Events / Mouse Events Examples

{{<img click-events.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">ClickEvents:: / MouseEvents::</th>
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
    <tr>
      <th scope="row">mousedown <span class="badge bg-danger">DEV<span></th>
      <td>It will trigger mouse down event on element.</td>
    </tr>
    <tr>
      <th scope="row">mouseup <span class="badge bg-danger">DEV<span></th>
      <td>It will trigger mouse up event on element.</td>
    </tr>
    <tr>
      <th scope="row">mouseover <span class="badge bg-danger">DEV<span></th>
      <td>It will trigger mouse over event on element</td>
    </tr>
    <tr>
      <th scope="row">mouseout <span class="badge bg-danger">DEV<span></th>
      <td>It will trigger mouse out event on element.</td>
    </tr>
    <tr>
      <th scope="row">mouseenter <span class="badge bg-danger">DEV<span></th>
      <td>It will trigger mouse enter event on element.</td>
    </tr>
    <tr>
      <th scope="row">mouseleave <span class="badge bg-danger">DEV<span></th>
      <td>It will trigger mouse leave event on element.</td>
    </tr>
    <tr>
      <th scope="row">mousemove <span class="badge bg-danger">DEV<span></th>
      <td>It will trigger mouse move event on element.</td>
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


## Location Command
<span class="badge bg-warning text-dark">BETA<span>

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
      <th scope="row">LocationCommand::href::https://www.getautoclicker.com</th>
      <td>it will open https://www.getautoclicker.com in same tab</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::replace::https://www.getautoclicker.com</th>
      <td>It will open this page without maintaining history so when you click back you can come to this page again</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::assign::https://www.getautoclicker.com</th>
      <td>Its similar to you click on link which open another page</td>
    </tr>
  </tbody>
</table>

## Exec Command Examples 
<span class="badge bg-danger">Under development</span>

{{<img exec-command.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">ExecCommand::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">cut</th>
      <td>It will cut text from element to clipboard.</td>
    </tr>
    <tr>
      <th scope="row">copy</th>
      <td>It will copy text from element to clipboard.</td>
    </tr>
    <tr>
      <th scope="row">delete</th>
      <td>It will delete text from element.</td>
    </tr>
    <tr>
      <th scope="row">paste</th>
      <td>It will paste text from clipboard to element.</td>
    </tr>
    <tr>
      <th scope="row">selectAll</th>
      <td>It will selectAll text in element.</td>
    </tr>
  </tbody>
</table>
<hr/>

{{<callout info>}}
You can also perform more than one task in series e.g
{{</callout>}}

{{<img multiple-events.png>}}