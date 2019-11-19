---
menu: docs
title:  "Action"
tags: [configuration, configuration list, configuration ,action, Init wait, XPath, Value, repeat, repeat interval, r-interval]
---

{:.bd-title}
# Action

{:.bd-lead}
Action is combination of [xpath](#xpath) and [value](#value). where xpath is used to find the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) element in page. If found element is `select`, `textarea`, `input` it requires extra parameter that is value to be filled or else it will trigger click on found element.

{:.bd-callout .bd-callout-warning}
> If no element is found it will do [retry](settings/#retry) for n number of times as configured under [settings](settings) screen and proceed with [error handling](settings/#error-handling) method.

> ![Action]({{'/assets/img/action.png' | relative_url }}){:width="100%"}

---
## Init Wait
Init Wait stands for Initial Wait. Initial Wait to start particular action. Waiting time is provided in sec. It can be used were extension starts but it require few sec for page to load fully.

{% include_relative float-number-example.md %}

> Its not mandatory field. if left blank extension will start executing right away.

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
## Value

Suppose you are performing action on `input` `textarea` `dropdown` you should provide one extra field that is value for [xpath](xpath) you have added.

{:.bd-callout .bd-callout-warning}
> This is mandatory field only if XPath element is `input` `textarea` `dropdown`.

---
## Repeat
If you want specific action to repeat more than once you can provide repeat value. 

{:.bd-callout .bd-callout-warning}
> positive numeric value `1` to `999`

---
## Repeat Interval
If you want to control the time between each repeat you can provide repeat-interval as well.

{% include_relative float-number-example.md %}