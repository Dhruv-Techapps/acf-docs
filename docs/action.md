---
menu: docs
title:  "Action"
tags: [configuration, configuration list, configuration ,action, Init wait, XPath, Value, repeat, repeat interval, r-interval]
---
# Action

![Action]({{'/assets/img/action.png' | relative_url }}){:width="100%"}
action is combination of

---
## Init Wait
Init Wait stands for Initial Wait. Initial Wait to start particular action. Waiting time is provided in sec. It can be used were extension starts but it require few sec for page to load fully.

### Example
* `1`
* `1.5`
* `0.5`
* `1e4` (Random value between 1 to 4)
* Leave it `blank`/`empty` to start right away 

> Its not mandatory field. if left blank extension will start executing right away.

---
## XPath
Its little tricky but believe me its not that hard to find.

### Follow below steps to get XPath
1. Right click any button or link or whaterver you want to click in webpage and select Inspect.
2. It will open developer console and highlight that element under Elements Tab
3. Right click that element and select Copy > Copy XPath.

Thats it you have your XPath of that element now.


### Examples

| XPath | HTML |
| ------ | ------ |
|//div/a[1]|`<div><a selected></a><a></a></div>`|


**[Click here](xpath) to find more XPath Examples**

---
## Value

Suppose you are performing action on `input`|`textarea`|`dropdown` you should provide one extra field that is value for [XPath](/docs/xpath) you have added.

> This is mandatory field only if XPath element is `input`|`textarea`|`dropdown`.

---
## Repeat
If you want specific [action](#action) to repeat more than once you can provide `repeat` value. 

{:.lead}
> positive numeric value `1` to `999`

---
## Repeat Interval
If you want to control the time between each [repeat](#repeat) you can provide `repeat Interval` as well.

{% include_relative repeat-interval-example.md %}