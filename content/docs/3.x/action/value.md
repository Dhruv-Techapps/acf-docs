---
layout: docs
title: Value
description: Now you can perform much more than just click or fill form elements. an element referred in below table is one which is found by `Xpath`
group: action
toc: true
---


## Func
<span class="badge bg-danger">DEV</span>
<span>Now run browser default API functions or custom func from extension directly. This feature is still under development and we will provide better location to run command from action. Run one or more than one command by separating them using `;` <br/>`Func::console.log("Hello");console.log("World");`</span>

{{<img func-command.png>}}

{{<callout danger>}}
#### Func methods

One important warning in advance: Malicious scripts can violate your privacy and act on your behalf!
- You should create script own. for simpler functionality like calling a function and all.
- If you not sure how to what all functions are available then You should only run scripts from sources you trust.
{{</callout>}}

## Paste
<span class="badge bg-danger">DEV</span>
<span>Now you can paste content into input fields which are copied by extension.</span>

{{<img paste-command.png>}}

## Copy
<span class="badge bg-danger">DEV</span>
<span>Now you can copy any content from webpage using copy syntax.</span>

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


## Random Value
<span class="badge bg-danger">DEV</span>

{{<img action-random.png>}}

> By Default the length of string is fixed to 6 and filter is set to all character + numbers + symbol so when you use `<random>` you will get random string of length 6 with mix of char + num + symbol

<table class="table">
  <thead>
    <tr>
      <th scope="col"  width="210px">&lt;random&gt;</th>
      <th scope="col">Description (Generate Random value)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">&lt;random[.]{6}&gt;</th>
      <td>
        <code>[.]</code> - Any Single Character <code>{6}</code> - no of characters 6
        <ul>
          <li>X0UN#Z</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">&lt;random[.]{6,12}&gt;</th>
      <td>
        <code>[.]</code> - Any single character <code>{6,12}</code> - no of characters between 6 and 12
        <ul>
          <li>Dr_5t4r</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">&lt;random[a-z]{6}&gt;</th>
      <td>
        <code>[a-z]</code> - A character in the range: a-z
        <ul>
          <li>czlvry</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">&lt;random[A-Z]{6}&gt;</th>
      <td>
        <code>[A-Z]</code> - A character in the range: A-Z
        <ul>
          <li>UDDDJT</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">&lt;random[\d]{6}&gt;</th>
      <td>
        <code>[\d]</code> - A digit
        <ul>
          <li>546544</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">&lt;random[\w]{6}&gt;</th>
      <td>
        <code>[\w]</code> - A word character
        <ul>
          <li>Ae3fFD</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" width="120px">&lt;random[custom]{6}&gt;</th>
      <td>
        <code>[custom]</code> - A custom string character
        <ul>
          <li>csuotm</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Attribute
{{<img action-attr.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">Attr::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" width="120px">Attr::set::prop::value</th>
      <td>Now update value of attribute using attribute syntax.
        <ul>
          <li>Attr::set::disabled::false &lt;input disabled="<b>true</b>"> -> &lt;input disabled="<b>false</b>"></li>
          <li>Attr::set::target::_blank &lt;a> -> &lt;a <b>target="_blank"</b>> to open links in new tab</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" width="120px">Attr::remove::prop</th>
      <td>Now remove attribute using attribute syntax.
        <ul>
          <li>Attr::remove::disabled &lt;input <b>disabled="true"</b>> -> &lt;input></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>


## Class

{{<img action-class.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">Class::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" width="120px">
        Class::add::className<br/>
        e.g. Class::add::btn
      </th>
      <td>Now add new class to element using class syntax.
        <ul>
          <li>&lt;input class="button"> -> &lt;input class="button <b>btn</b>"></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" width="120px">
        Class::remove::className<br/>
        e.g. Class::remove::btn
      </th>
      <td>Now remove new class from element using class syntax.
        <ul>
          <li>&lt;input class="button <b>btn</b>"> -> &lt;input class="button"></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" width="120px">
        Class::replace::removeClassName::addClassName<br/>
        e.g. Class::replace::unlike::like
      </th>
      <td>Now replace one class with another to element using class syntax.
        <ul>
          <li>&lt;span class="<b>unlike</b>"> -> &lt;span class="<b>like</b>"></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" width="120px">Class::clear</th>
      <td>Now remove all class of element using class syntax.
        <ul>
          <li>&lt;input class="<b>btn btn-primary button</b>"> -> &lt;input class=""></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

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
      <th scope="row">MouseEvents::input</th>
      <td>It will trigger input event on element.</td>
    </tr>
     <tr>
      <th scope="row">MouseEvents::change</th>
      <td>It will trigger text change event on element.</td>
    </tr>
    <tr>
      <th scope="row">MouseEvents::["input","change"]</th>
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

{{<img key-events.png>}}

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
      <th scope="row">LocationCommand::href::https://getautoclicker.com</th>
      <td>it will open https://getautoclicker.com in same tab</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::replace::https://getautoclicker.com</th>
      <td>It will open this page without maintaining history so when you click back you can come to this page again</td>
    </tr>
    <tr>
      <th scope="row">LocationCommand::assign::https://getautoclicker.com</th>
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
      <th scope="row">LocationCommand::open::https://getautoclicker.com</th>
      <td>Its similar to open https://getautoclicker.com page in new tab</td>
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
      <th scope="row">WindowCommand::open::https://getautoclicker.com</th>
      <td>Its similar to open https://getautoclicker.com page in new tab</td>
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