---
layout: docs
title: Select Option
description: These commands are specific to dropdown 
group: action-value
toc: true
---

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