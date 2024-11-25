---
layout: docs
title: Action
description: Overview of various actions and their properties.
group: action
toc: true
---
{{<img action.png>}}

Action is a combination of an [element finder]({{<docsref "/action/element-finder">}}) and a [value]({{<docsref "action-value/overview">}}). The element finder is used to locate a specific element within the page. There are multiple ways to find the element refer to the documentation for more details. The value field can be left blank if a click is required, or it can be filled with plain text to fill input fields. There are multiple options that can be performed; check out the action value documentation for more details.

In addition to these two, there are other properties of action that can enhance its features, such as 
- [init wait]({{<docsref "/action/overview#init-wait">}})
- [name]({{<docsref "/action/overview#name">}})
- [element finder]({{<docsref "/action/element-finder">}})
- [value]({{<docsref "/action-value/overview">}})
- [repeat]({{<docsref "/action/overview#repeat">}})
- [repeat interval]({{<docsref "/action/overview#repeat-interval">}})
- [disable]({{<docsref "/action/overview#disable">}})
- [addon]({{<docsref "/addon/overview">}})
- [action settings]({{<docsref "/action/action-settings">}})
- [action condition]({{<docsref "/action/action-condition">}})

{{<callout warning>}}
If no element is found it will do [retry]({{<docsref "/settings/retry">}}) for n number of times as configured under [settings]({{<docsref "/settings/overview">}}) screen and proceed with [error handling]({{<docsref "/settings/overview#error-handling">}}) method.
{{</callout>}}

## Init Wait
Init Wait stands for Initial Wait. Initial Wait to start particular action. Waiting time is provided in sec. It can be used where extension starts but it requires a few seconds for the page to load fully.

Init Wait can be used to delay the action with the given number of seconds. It runs only the first time when the action executes and does not run when the action is repeated in a loop. It's not a mandatory field. If left blank, the extension will start executing right away.

{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown >}}

## Name
The `name` property is used to distinguish between different actions. It is not a mandatory field and can be left blank. You can provide any name that helps you understand the purpose of the action.

## Repeat
If you want a specific action to repeat multiple times, you can set a repeat value. By default, the action will run once. Setting a repeat value of 1 will make the action run twice.

{{<callout info>}}
positive numeric value `1` to `999`
{{</callout >}}

## Repeat Interval
If you want to control the time between each repeat you can provide repeat-interval as well.

{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown >}}

## Disable
The `disable` property allows you to disable an action. When an action is disabled, it will be skipped during execution.

### Usage
Enable or disable action from more option in action list.