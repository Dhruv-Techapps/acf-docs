---
layout: docs
title: Action
description: Action is combination of XPath and Value. where xpath is used to find the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) element in page. If found element is `select`, `textarea`, `input` it requires extra parameter that is value to be filled or else it will trigger click on found element.
group: action
toc: true
---

{{<callout warning>}}
If no element is found it will do [retry]({{<docsref "/settings/retry">}}) for n number of times as configured under [settings]({{<docsref "/settings/overview">}}) screen and proceed with [error handling]({{<docsref "/settings/error-handling">}}) method.
{{</callout>}}

{{<img action.png>}}