---
menu: docs
title:  "Addon"
tags: [configuration, configuration list, configuration ,addon,  XPath, Value, condition,check]
---

# Addon

![Addon](../assets/img/addon.png){:width="100%"}

In order to check some condition before clicking / filling add addon to that specific [action](action.md). You can add condition by clicking on **</>** icon which appears when you hover over [action](action.md).

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


**[Click here](action/xpath.md) to find more XPath Examples**

---
## Condition
You can specify what condition you need to apply.
(a) - value or text of XPath element
(b) - [value](#value) provided in field.

##Applicable for string and number
- Equals -  (a) should be equal to (b)
- Contains - (a) contains (b)

###Applicable for numbers only
- Greater Than - (a) is greater than (b)
- Lesser Than - (a) is lesser than (b)
- Greater Than Equals - (a) is greater than or equals to (b)
- Lesser Than Equals - (a) is lesser than or equals to (b)
  
---
## Value

Suppose you are performing action on `input`|`textarea`|`dropdown` you should provide one extra field that is value for [XPath](XPath) you have added.

> This is mandatory field only if XPath element is `input`|`textarea`|`dropdown`.
