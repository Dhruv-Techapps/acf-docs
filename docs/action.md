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
> If no element is found it will do [retry](settings#retry) for n number of times as configured under [settings](settings) screen and proceed with [error handling](settings#error-handling) method.

> ![Action]({{'/assets/img/action.png' | relative_url }}){:width="100%"}

## Name
Provide unique name to each action to identify its purpose.

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
Now you can perform much more than just click or fill form elements. an element refered in below table is one which is found by `Xpath`

### <kbd>Scroll To Examples</kbd>

{:.mt-3 .table .table-bordered .table-striped}
| ScrollTo:: | Description |
|---|---|
| `XPath` | It will scroll the page to element.|
| `Top` \| `TopLeft` | It will scroll the page to `Top Left` position.|
| `TopRight` | It will scroll the page to `Top Right` position.|
| `Bottom` \| `BottomLeft` |  It will scroll the page to `Bottom Left` position.|
| `BottomRight` |  It will scroll the page to `Bottom Right` position.|

> ![ScrollTo]({{'/assets/img/ScrollTo.png' | relative_url }}){:width="100%"}

### <kbd>Click Events Examples</kbd>

{:.mt-3 .table .table-bordered .table-striped}
| ClickEvents:: | Description |
|---|---|
| `click` | It will `click` the element.|
| `dblclick` | It will `double click` the element.|

> ![ClickEvents]({{'/assets/img/ClickEvents.png' | relative_url }}){:width="100%"}

### <kbd>Form Events Examples</kbd>

{:.mt-3 .table .table-bordered .table-striped}
| FormEvents:: | Description |
|---|---|
| `blur` | It will trigger `blur` event on the element.<br/> It removed focus from the element.|
| `focus` | It will trigger `focus` event on the element.|
| `select` | It will trigger `select` event on the element.<br/> In `input field` and `textarea` it will select the text inside |
| `clear` | It will trigger `clear` event on the element.<br/> It clears field value.|
| `remove` | It will `remove` element.|
| `submit` | It will `submit` the form in which element is present.|


> ![FormEvents]({{'/assets/img/FormEvents.png' | relative_url }}){:width="100%"}

### <kbd>Exec Command Examples</kbd>

{:.mt-3 .table .table-bordered .table-striped}
| ExecCommand:: | Description |
|---|---|
| `cut` | It will `cut` text from element to clipboard.|
| `copy` | It will `copy` text from element to clipboard.|
| `delete` | It will `delete` text from element.|
| `paste` | It will `paste` text from clipboard to element.|
| `selectAll` | It will `selectAll` text in element.|

> ![ExecCommand]({{'/assets/img/ExecCommand.png' | relative_url }}){:width="100%"}

{:.bd-callout .bd-callout-info}
>  You can also perform more than one task in series e.g

> ![MultipleEvents]({{'/assets/img/MultipleEvents.png' | relative_url }}){:width="100%"}

---

## Repeat
If you want specific action to repeat more than once you can provide repeat value. 

{% include_relative integer-number-example.md %}

---
## Repeat Interval
If you want to control the time between each repeat you can provide repeat-interval as well.

{% include_relative float-number-example.md %}

---
## Columns Filter
If you dont want any specific column you can hide/show the same from table view.

---
## Export & Import
You can export and import whole list of actions of configuration anytime and keep it as backup.

{:.bd-callout .bd-callout-danger}
> #### Warning
> Import functionality will override all current actions. Make sure before performing this operation