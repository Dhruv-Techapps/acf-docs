---
menu: docs
title: How to Use
---
{:.bd-title}
# Introduction

{:.bd-lead}
Auto Click / Auto Fill Extension is like a utility extension which helps user to click / fill on any website with by providing few information about the site and the button which they want to click.

Auto Click / Auto Fill extension consist of 4 major parts [Configuration List](configuration-list.md), [Configure](configuration.md), [Batch](batch.md), [Action](action.md) with extra added configuration such as [Settings](settings), [Addon](addon). 

There are two version of extension

{:.table .table--hover .table-bordered}
| LITE / Simple | PRO / Advance |
| ---------- | ------------ |
| [Configuration List]({% link docs/configuration-list.md %})<ul><li>Add</li><li>Remove</li></ul>| [Configuration List](configuration-list.md)<ul><li>Add</li><li>Remove</li></ul>|
| [Configuration](configuration.md)<ul><li>[Enable/Disable](configuration.md#enable--disable)</li><li>[URL](configuration/url.md)</li><li>[Refresh](configuration.md#refresh)</li></ul>|[Configuration](configuration.md)<ul><li>[Enable/Disable](configuration.md#enable--disable)</li><li>[URL](configuration/url.md)</li><li>[Refresh](configuration.md#refresh)</li></ul>|
| [Action](action.md)<ul><li>[XPath](xpath.md)</li><li>[Value](action.md#value)</li><li>Add</li><li>Remove</li></ul>|[Action](action.md)<ul><li>[XPath](xpath.md)</li><li>[Value](action.md#value)</li><li>Add</li><li>Remove</li><li>[Repeat & R-Interval](action.md/#repeat--repeat-interval)</li><li>[Init Wait](action.md/#repeat--repeat-interval)</li></ul>|
|[Addon](addon.md)<ul><li>[XPath](xpath.md)</li><li>[Condition](addon.md#condition)</li><li>[Value](addon.md#value)</li></ul>|[Addon](addon.md)<ul><li>[XPath](xpath.md)</li><li>[Condition](addon.md#condition)</li><li>[Value](addon.md#value)</li></ul>|
|[Settings](settings.md)<ul><li>[Check iFrame](settings.md#check-iframe)</li><li>[Extension Load](settings.md#extension-load)</li><li>[Retry & Retry Interval](settings.md#retry--retry-interval)</li><li>[Error Handling](settings.md#error-handling)</li><li>[Export & Import](settings.md#export--import)</li></ul>|[Settings](settings.md)<ul><li>[Check iFrame](settings.md#check-iframe)</li><li>[Extension Load](settings.md#extension-load)</li><li>[Retry & Retry Interval](settings.md#retry--retry-interval)</li><li>[Error Handling](settings.md#error-handling)</li><li>[Export & Import](settings.md#export--import)</li></ul>|
||[Batch](batch.md)<ul><li>[Start Time](batch.md#start-time)</li><li>[Init Wait](batch.md#init-wait)</li><li>[Repeat & R-Interval](batch.md#repeat--repeat-interval)</li></ul> |


## <span class="bd-content-title">Lite Version</span>
Lite version is not limited its simpler version off extension where you just need to take care of [XPath](xpath) and [value](value).

![LITE](/assets/img/lite.png){:width="100%"}

## <span class="bd-content-title">Pro Version</span>
Pro version is advanced version where you can perform advance functionality like [repeat](batch/#repeat--repeat-interval), [start time](batch/#start-time), [init wait](batch/#init-wait)

![PRO](/assets/img/pro.png){:width="100%"}