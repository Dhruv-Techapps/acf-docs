---
menu: docs
title:  "Settings"
tags: [xpath, configuration, settings, iframe, retry, retry interval, retry option, error , error handling,export, import]
---

{:.bd-title}
# Settings

{:.bd-lead}
Under settings screen you can control how and when should extension connect with your configured site,  also if any of [xpath](action/#xpath.md) is not found how many [retry](#retry) attempt should be made, and fallback option if no element is found.

{:.bd-callout .bd-callout-info}
> You can also export and backup your configuration and import back whenever required.

> ![Settings]({{'/assets/img/settings.png' | relative_url }}){:width="100%"}

---
## Check Iframe

If an action need to be performed on button / input field which is inside iframe you must check this checkbox which enables check of iframe content as well.

---
## Extension Load

{:.table .table-bordered .table-striped}
| Event Type | Default | Description |
| --- | --- | --- |
|[Window](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload) | `true` |* Extension is loaded when all content of page is loaded e.g. stylesheets, images, subforms<br/>* Slower than Document|
|[Document](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)| `false` |* Extension is loaded without waiting for stylesheets, images, and subframes to finish loading<br/>* Faster than Window|
 
---
## Retry & Retry Interval
Retry finding [xpath](xpath) in webpage for number of times provided. default is `5`

{% include_relative integer-number-example.md %}

---
## Retry Interval
Retry Interval will wait for no of sec provided before retry to find [xpath](xpath) of [action](action). default is `1` sec

{% include_relative float-number-example.md %}

---
## Error Handling
Select what should happen if xpath is not found after no of retry.

|Name|Default|Description|
|---|---|---|
|`Stop`|selected| Do nothing. Stop extension without procedding further.|
|`Skip`|not selected| Skip current action and continue next action.|
|`Refresh Page`|not selected|Refresh whole page.|

---
## Show Notification

{:.bd-callout .bd-callout-warning}
> #### ! Important
> This is very important feature of extension which tells you if any error occur in extension while executing. Or if any XPath provided is not found or wrong. Select this option while configuring and uncheck once you have finished configuring.

---
## Export & Import
You can export and import whole configuration anytime and keep it as back

{:.bd-callout .bd-callout-danger}
> #### Warning
> Import functionality will override all current configuration. Make sure before performing this operation