---
layout: docs
title: Action
description: Action is combination of XPath and Value. where xpath is used to find the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) element in page. If found element is `select`, `textarea`, `input` it requires extra parameter that is value to be filled or else it will trigger click on found element.
group: action
toc: true
---

{{<img action.png>}}

Action is a combination of an [element finder]({{<docsref "/action/element-finder">}}) and a [value]({{<docsref "action-value/overview">}}). The element finder is used to locate a specific element within the page. There are multiple ways to find the element refer to the documentation for more details. The value field can be left blank if a click is required, or it can be filled with plain text to fill input fields. There are multiple options that can be performed; check out the action value documentation for more details.

In addition to these two, there are other properties of action that can enhance its features, such as 
- [name]({{<docsref "/action/name">}})
- [init wait]({{<docsref "/action/init-wait">}})
- [repeat]({{<docsref "/action/repeat">}})
- [repeat interval]({{<docsref "/action/repeat-interval">}})
  - [action disable]({{<docsref "/action/disable">}})
  - [addon]({{<docsref "/addon/overview">}})
  - [action settings]({{<docsref "/action-settings/overview">}})
  - [action condition]({{<docsref "/action-condition/overview">}})

{{<callout warning>}}
If no element is found it will do [retry]({{<docsref "/settings/retry">}}) for n number of times as configured under [settings]({{<docsref "/settings/overview">}}) screen and proceed with [error handling]({{<docsref "/settings/overview#error-handling">}}) method.
{{</callout>}}