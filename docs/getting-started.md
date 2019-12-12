---
menu: docs
title: How to Use
---

{:.bd-title}
# Introduction

{:.bd-lead}
Auto Click / Auto Fill is like a utility extension which helps user to click / fill on any website with by providing few information about the site and the button which they want to click.

## Quick start
* Download [Auto Click/Auto Fill](https://chrome.google.com/webstore/detail/auto-click-auto-fill/iapifmceeokikomajpccajhjpacjmibe) extension.
* Go to [site](test) on which you need to perform automation.
* Right Click `button`,`input`,`textarea`, or any UI element and select ![Action]({{'/assets/favicons/icon32.png' | relative_url }}){:width="22px"} <kbd>Auto Click / Auto Fill</kbd> option from menu.
* You will be redirected to configuration page of extension, with pre filled value 
  * URL of site
  * [XPath](xpath) of UI element.
* You can change the configuration such as [Name](configuration#name), [Start Time](configuration#start-time), [Repeat](batch#repeat) etc.

![context menu]({{'/assets/img/context-menu.png' | relative_url }}){:width="100%" .border}

## More Options
Auto Click / Auto Fill extension consist of 4 major parts [configuration-list](configuration-list), [configure](configuration), [batch](batch), [action](action) with extra added configuration such as [settings](settings), [addon](addon). 

There are two version of extension

{:.table .table--hover .table-bordered}
| LITE / Simple | PRO / Advance |
| ---------- | ------------ |
|[Configuration List](configuration-list)<br/>* Add<br/>* Remove|[Configuration List](configuration-list)<br/>* Add<br/>* Remove|
|[Configuration](configuration)<br/>* [Enable/Disable](configuration#enable--disable)<br/>* [URL](configuration#url)<br/>* [Name](configuration#name)|[Configuration](configuration)<br/>* [Enable/Disable](configuration#enable--disable)<br/>* [URL](configuration#url) <br/>* [Name](configuration#name)<br/>* [Start Time](configuration#start-time)|
|[Action](action)<br/>* [XPath](action#xpath)<br/>* [Value](action#value)<br/>* Add<br/>* Remove|[Action](action)<br/>* [Init Wait](action#init-wait)<br/>* [XPath](action#xpath)<br/>* [Value](action#value)<br/>* [Repeat](action#repeat)<br/>* [Repeat Interval](action#repeat-interval)<br/>* Add<br/>* Remove|
|[Addon](addon)<br/>* [XPath](addon#xpath)<br/>* [Condition](addon#condition)<br/>* [Value](addon#value)|[Addon](addon)<br/>* [XPath](addon#xpath)<br/>* [Condition](addon#condition)<br/>* [Value](addon#value)|
|[Settings](settings)<br/>* [Check iFrame](settings#check-iframe)<br/>* [Extension Load](settings#extension-load)<br/>* [Retry](settings#retry)<br/>* [Retry Interval](settings#retry-interval)<br/>* [Error Handling](settings#error-handling)<br/>* [Export & Import](settings#export--import)|[Settings](settings)<br/>* [Check iFrame](settings#check-iframe)<br/>* [Extension Load](settings#extension-load)<br/>* [Retry](settings#retry)<br/>* [Retry Interval](settings#retry-interval)<br/>* [Error Handling](settings#error-handling)<br/>* [Export & Import](settings#export--import)|
||[Batch](batch)<br/>* [Refresh](batch#refresh)<br/>* [Init Wait](batch#init-wait)<br/>* [Repeat](batch#repeat)<br/>* [Repeat Interval](batch#repeat-interval)|


## Lite Version
Lite version is not limited its simpler version off extension where you just need to take care of<br/>

> ![LITE]({{'/assets/img/lite.png' | relative_url }}){:width="100%"}

## Pro Version
Pro version is advanced version where you can perform advance functionality like<br/>

> ![PRO]({{'/assets/img/pro.png' | relative_url }}){:width="100%"}