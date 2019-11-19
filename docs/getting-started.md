---
menu: docs
title: How to Use
---
{:.bd-title}
# Introduction

{:.bd-lead}
Auto Click / Auto Fill Extension is like a utility extension which helps user to click / fill on any website with by providing few information about the site and the button which they want to click.

## Quick start
Auto Click / Auto Fill extension consist of 4 major parts [configuration list](configuration-list), [configure](configuration), [batch](batch), [action](action) with extra added configuration such as [settings](settings), [addon](addon). 

There are two version of extension

{:.table .table--hover .table-bordered}
| LITE / Simple | PRO / Advance |
| ---------- | ------------ |
|[Configuration List](configuration-list)<br/>* Add<br/>* Remove|[Configuration List](configuration-list)<br/>* Add<br/>* Remove|
|[Configuration](configuration)<br/>* [Enable/Disable](configuration/#enable--disable)<br/>* [URL](configuration/#url)<br/>* [Refresh](configuration/#refresh)|[Configuration](configuration)<br/>* [Enable/Disable](configuration#enable--disable)<br/>* [URL](configuration/#url)<br/>* [Refresh](configuration/#refresh)|
|[Action](action)<br/>* [XPath](action/#xpath)<br/>* [Value](action/#value)<br/>* Add<br/>* Remove|[Action](action)<br/>* [Init Wait](action/#init-wait)<br/>* [XPath](action/#xpath)<br/>* [Value](action/#value)<br/>* [Repeat](action/#repeat)<br/>* [Repeat Interval](action/#repeat-interval)<br/>* Add<br/>* Remove|
|[Addon](addon)<br/>* [XPath](addon/#xpath)<br/>* [Condition](addon/#condition)<br/>* [Value](addon/#value)|[Addon](addon)<br/>* [XPath](addon/#xpath)<br/>* [Condition](addon/#condition)<br/>* [Value](addon/#value)|
|[Settings](settings)<br/>* [Check iFrame](settings/#check-iframe)<br/>* [Extension Load](settings/#extension-load)<br/>* [Retry](settings/#retry)<br/>* [Retry Interval](settings/#retry-interval)<br/>* [Error Handling](settings/#error-handling)<br/>* [Export & Import](settings/#export--import)|[Settings](settings)<br/>* [Check iFrame](settings/#check-iframe)<br/>* [Extension Load](settings/#extension-load)<br/>* [Retry](settings/#retry)<br/>* [Retry Interval](settings/#retry-interval)<br/>* [Error Handling](settings/#error-handling)<br/>* [Export & Import](settings/#export--import)|
||[Batch](batch)<br/>* [Start Time](batch/#start-time)<br/>* [Init Wait](batch/#init-wait)<br/>* [Repeat](batch/#repeat)<br/>* [Repeat Interval](batch/#repeat-interval)|


## <span class="bd-content-title">Lite Version</span>
Lite version is not limited its simpler version off extension where you just need to take care of<br/>
- [Action](action)
  - [XPath](action/#xpath)
  - [Value](action/#value)


> ![LITE]({{'/assets/img/lite.png' | relative_url }}){:width="100%"}

## <span class="bd-content-title">Pro Version</span>
Pro version is advanced version where you can perform advance functionality like<br/>
- [Batch](batch)
  - [start time](batch/#start-time)
  - [init wait](batch/#init-wait)
  - [repeat](batch/#repeat)
  - [repeat interval](batch/#repeat--interval)
  - [Action](action)
    - [Init Wait](action/#init-wait)
    - [XPath](action/#xpath)
    - [Value](action/#value)
    - [Repeat](action/#repeat)
    - [Repeat Interval](action/#repeat-interval)


> ![PRO]({{'/assets/img/pro.png' | relative_url }}){:width="100%"}