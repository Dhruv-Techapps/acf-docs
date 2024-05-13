---
layout: docs
title: Duplicate Configuration
description: You want same set of actions and its condition to be repeated for different URL its now simple just by selecting duplicate configuration it will copy existing configuration add into configuration list just like that.
group: configuration
toc: true
---

{{<img configuration-duplicate.png>}}

Duplicate configuration copy the data including [URL]({{<docsref "/configuration/url">}}) and all its [actions]({{<docsref "/action/overview">}}) without changing anything except [name]({{<docsref "/configuration/name">}}). it adds `Duplicate` key at the end of name just to indicate that its duplicated from some other configuration.

Make sure to change the [URL]({{<docsref "/configuration/url">}}) of duplicated [configuration]({{<docsref "/configuration/overview">}}) so it dont conflict with existing configuration. And as you know already that order of configuration in configuration list is very important if a URL matches more than one configuration it will select the first matching configuration from list and execute same. 