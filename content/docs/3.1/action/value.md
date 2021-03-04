---
layout: docs
title: Value
description: Now you can perform much more than just click or fill form elements. an element referred in below table is one which is found by `Xpath`
group: action
toc: true
---

## Select Option

{{<img select-option.png>}}
{{<example lang="html" show_preview="false">}}
<select id="product-size">
  <option>size</option>
  <option data-value-class="opt-35item-0" data-value-size="35" value="opt-35item-0">35</option>
  <option data-value-class="opt-36item-1" data-value-size="36" value="opt-36item-1">36</option>
  <option data-value-class="opt-37item-2" data-value-size="37" value="opt-37item-2">37</option>
  <option data-value-class="opt-38item-3" data-value-size="38" value="opt-38item-3">38</option>
  <option data-value-class="opt-39item-4" data-value-size="39" value="opt-39item-4">39</option>
  <option data-value-class="opt-40item-5" data-value-size="40" value="opt-40item-5">40</option>
</select>
{{</example>}}
### Example
<table class="table">
  <thead>
    <tr>
      <th scope="col">Element Finder</th>
      <th scope="col">Selection</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">//select[@id="product-size"]/option[2]</th>
      <td>It will select second option with text as <b>35</b></td>
    </tr>
    <tr>
      <th scope="row">//select[@id="product-size"]/option[@data-value-size="36"]</th>
      <td>It will select third option with text as <b>36</b></td>
    </tr>
    <tr>
      <th scope="row">//select[@id="product-size"]/option[contains(@value,"opt-40")]</th>
      <td>It will select last option with text as <b>40</b></td>
    </tr>
    <tr>
      <th scope="row">//select[@id="product-size"]/option[text()="39"]</th>
      <td>It will select last second option with text as <b>39</b></td>
    </tr>
  </tbody>
</table>
{{<callout info>}}
You must set the value field to `true`
{{</callout>}}

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
<hr/>

{{<callout info>}}
You can also perform more than one task in series e.g
{{</callout>}}

{{<img multiple-events.png>}}

## Random Value
<span class="badge bg-warning text-dark">DEV</span>

{{<callout info>}}
##### You can get random value with [batch repeat]({{<docsref "/batch/repeat">}}) 

e.g. In value field if you enter `example<batchRepeat>`
1. Value will be `example0`
2. Value will be `example1`

##### This will continue for no of batch repeat you have provided. 

e.g. If batch repeat is `5` it will run till `example4`
{{</callout>}}