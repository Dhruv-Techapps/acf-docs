---
layout: docs
title: Value
description: Now you can perform much more than just click or fill form elements. an element referred in below table is one which is found by `Xpath`
group: action
toc: true
---


## Query Param

{{<img query.png>}}
{{<img query-url.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">Query::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" width="120px">?param=value</th>
      <td>Query parameters can be defined as the optional key-value pairs that appear after the question mark in the URL. Basically, they are extensions of the URL that are utilized to help determine specific content or action based on the data being delivered. Query parameters are appended to the end of the URL, using a ‘?’. The question mark sign is used to separate path and query parameters.

If you want to add multiple query parameters, an ‘&’ sign is placed in between them to form what is known as a query string. It can feature various object types with distinct lengths such as arrays, strings, and numbers.</td>
    </tr>
  </tbody>
</table>

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

## Scroll To

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
      <th scope="row">ScrollTo::XPath</th>
      <td>It will scroll the page to element.</td>
    </tr>
    <tr>
      <th scope="row">ScrollTo::Top | ScrollTo::TopLeft</th>
      <td>It will scroll the page to Top Left position.</td>
    </tr>
    <tr>
      <th scope="row">ScrollTo::TopRight</th>
      <td>It will scroll the page to Top Right position.</td>
    </tr>
    <tr>
      <th scope="row">ScrollTo::Bottom | ScrollTo::BottomLeft</th>
      <td>It will scroll the page to Bottom Left position.</td>
    </tr>
    <tr>
      <th scope="row">ScrollTo::BottomRight</th>
      <td>It will scroll the page to Bottom Right position.</td>
    </tr>
  </tbody>
</table>


## Mouse Events

{{<img click-events.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">MouseEvents::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">MouseEvents::click</th>
      <td>It will click the element.</td>
    </tr>
    <tr>
      <th scope="row">MouseEvents::dblclick</th>
      <td>It will double click the element.</td>
    </tr>
    <tr>
      <th scope="row">MouseEvents::mousedown</th>
      <td>It will trigger mouse down event on element.</td>
    </tr>
    <tr>
      <th scope="row">MouseEvents::mouseup</th>
      <td>It will trigger mouse up event on element.</td>
    </tr>
    <tr>
      <th scope="row">MouseEvents::mouseover</th>
      <td>It will trigger mouse over event on element</td>
    </tr>
    <tr>
      <th scope="row">MouseEvents::mouseout</th>
      <td>It will trigger mouse out event on element.</td>
    </tr>
    <tr>
      <th scope="row">MouseEvents::mouseenter</th>
      <td>It will trigger mouse enter event on element.</td>
    </tr>
    <tr>
      <th scope="row">MouseEvents::mouseleave</th>
      <td>It will trigger mouse leave event on element.</td>
    </tr>
    <tr>
      <th scope="row">MouseEvents::mousemove</th>
      <td>It will trigger mouse move event on element.</td>
    </tr>
     <tr>
      <th scope="row">MouseEvents::["mouseover","mouseover","click"]</th>
      <td>It will stimulate mouse click on element.</td>
    </tr>
    <tr>
      <th scope="row">MouseEvents::["mouseout","mouseleave"]</th>
      <td>It will stimulate mouse click on element.</td>
    </tr>
     <tr>
      <th scope="row">MouseEvents::input <span class="badge bg-warning text-dark">BETA<span></th>
      <td>It will trigger input event on element.</td>
    </tr>
     <tr>
      <th scope="row">MouseEvents::change <span class="badge bg-warning text-dark">BETA<span></th>
      <td>It will trigger text change event on element.</td>
    </tr>
    <tr>
      <th scope="row">MouseEvents::["input","change"] <span class="badge bg-warning text-dark">BETA<span></th>
      <td>It will stimulate text filled and update/change event on element.</td>
    </tr>
  </tbody>
</table>


## Form Events

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
      <th scope="row">FormEvents::blur</th>
      <td>It will trigger blur event on the element.<br> It removed focus from the element.</td>
    </tr>
    <tr>
      <th scope="row">FormEvents::click</th>
      <td>It will click the form element.</td>
    </tr>
    <tr>
      <th scope="row">FormEvents::focus</th>
      <td>It will trigger focus event on the element.</td>
    </tr>
    <tr>
      <th scope="row">FormEvents::select</th>
      <td>It will trigger select event on the element.<br> In input field and textarea it will select the text inside</td>
    </tr>
    <tr>
      <th scope="row">FormEvents::submit</th>
      <td>It will submit the form in which element is present.</td>
    </tr>
    <tr>
      <th scope="row">FormEvents::clear</th>
      <td>It will trigger clear event on the element.<br> It clears field value.</td>
    </tr>
    <tr>
      <th scope="row">FormEvents::remove</th>
      <td>It will remove element.</td>
    </tr>
  </tbody>
</table>

## Key Events
<span class="badge bg-warning text-dark">BETA<span>

{{<img location-command.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">KeyEvents::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">KeyEvents::Example Text</th>
      <td>It simulate typing of  `Example Text` same like keyboard typing.</td>
    </tr>
    <tr>
      <th scope="row">KeyEvents::{"value":"Example text","delay":3}</th>
      <td>It simulate typing of  `Example Text` same like keyboard typing where each letter is typed with 3 sec delay.</td>
    </tr>
  </tbody>
</table>

## Location Command

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
      <th scope="row">LocationCommand::open::https://www.getautoclicker.com</th>
      <td>Its similar to open https://www.getautoclicker.com page in new tab</td>
    </tr>
  </tbody>
</table>


## Window Command

{{<img window-command.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">WindowCommand::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">WindowCommand::close</th>
      <td>Close current page only works if page is opened through script and not manually.</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::focus</th>
      <td>Its similar to you focus on window/page</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::blur</th>
      <td>Its similar to you move out on window/page</td>
    </tr>
     <tr>
      <th scope="row">WindowCommand::print</th>
      <td>Its similar to you Print (Ctrl + P) out on window/page</td>
    </tr>
     <tr>
      <th scope="row">WindowCommand::stop</th>
      <td>Its similar to you stop window/page load</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::moveBy::x,y</th>
      <td>Its similar to move window/page by x and y pixels</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::moveTo::x,y</th>
      <td>Its similar to move window/page to x and y pixels</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::open::https://www.getautoclicker.com</th>
      <td>Its similar to open https://www.getautoclicker.com page in new tab</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::cut <span class="badge bg-danger">DEV<span></th>
      <td>Cut selected text into clipboard</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::copy <span class="badge bg-danger">DEV<span></th>
      <td>Copy selected text into clipboard</td>
    </tr>
   <tr>
      <th scope="row">WindowCommand::delete <span class="badge bg-danger">DEV<span></th>
      <td>Delete selected text into clipboard</td>
    </tr>
     <tr>
      <th scope="row">WindowCommand::paste <span class="badge bg-danger">DEV<span></th>
      <td>Paste text from clipboard into field</td>
    </tr>
    <tr>
      <th scope="row">WindowCommand::selectAll <span class="badge bg-danger">DEV<span></th>
      <td>Select All text into clipboard</td>
    </tr>
  </tbody>
</table>
<hr/>

{{<callout info>}}
You can also perform more than one task in series e.g
{{</callout>}}

{{<img multiple-events.png>}}

## Batch Repeat

{{<callout info>}}
##### You can get sequence value with [batch repeat]({{<docsref "/batch/repeat">}}) 

e.g. In value field if you enter `example<batchRepeat>`
1. Value will be `example0`
2. Value will be `example1`

##### This will continue for no of batch repeat you have provided. 

e.g. If batch repeat is `5` it will run till `example4`
{{</callout>}}