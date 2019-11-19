---
menu: docs
title:  "Addon"
tags: [configuration, configuration list, configuration ,addon,  XPath, Value, condition,check]
---

{:.bd-title}
# Addon

{:.bd-lead}
In order to check some condition before clicking / filling add addon to that specific [action](action). You can add condition by clicking on ![**</>**]({{ '/assets/svg/code.svg' | relative_url }}) icon which appears when you hover over action row.

> ![Addon]({{'/assets/img/addon.png' | relative_url }}){:width="100%"}



---
## XPath
Its little tricky but believe me its not that hard to find.

{:.bd-callout .bd-callout-warning}
> Follow below steps to get XPath
> 1. Right click any button or link or whaterver you want to click in webpage and select Inspect.
> 2. It will open developer console and highlight that element under Elements Tab
> 3. Right click that element and select Copy > Copy XPath.
> 4. Thats it you have your XPath of that element now.

{:.bd-callout .bd-callout-info}
> [Click here](xpath#examples) to find xpath Examples

---
## Condition
You can specify what condition you need to apply.<br/>
(a) - value or text of xpath element<br/>
(b) - [value](#value) provided in configuration page field.

{:.table .table-bordered .table-striped}
|Name|Type|Description|
|---|---|---|
|Equals|String \|<br/>Number|(a) should be equal to (b)|
|Contains|String \|<br/>Number|(a) contains (b)|
|Greater Than|Number|(a) is greater than (b)|
|Lesser Than|Number|(a) is lesser than (b)|
|Greater Than Equals|Number|(a) is greater than or equals to (b)|
|Lesser Than Equals|Number|(a) is lesser than or equals to (b)|
  
---
## Value

Suppose you are performing action on `input`, `textarea`, `dropdown` you should provide one extra field that is value for [xpath](xpath) you have added.

{:.bd-callout .bd-callout-warning}
> This is mandatory field only if xpath element is `input`, `textarea`, `dropdown`.
