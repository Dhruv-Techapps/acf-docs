---
layout: docs
title: Batch
description: Overview of batch functionalities including repeat, repeat interval, and refresh.
group: configuration
toc: true
---
{{<img batch.png>}}

## Repeat
If you want specific batch to repeat more than once you can provide repeat value.

Its also used within ElementFinder Xpath and value to be replaces with the value of batch repeat index. e.g. If Element Finder need to be iterated over number of rows in table for that xpath will be `//table/tr[1]/td[1]/button` well this will only select the first row button and if you want to iterate the process for all button you can make use of batch repeat here like `//table/tr[<batchRepeat>]/td[1]/button` like this and repeat number 3 will iterate first three rows of table like [1..3].

**Examples**
- positive numeric value `1` to `999`

## Repeat Interval
If you want to control the time between each repeat you can provide repeat-interval as well.

{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown >}}

{{<callout info>}}
Its not mandatory field. if left blank extension will start executing right away.
{{</callout>}}

{{<callout warning>}}
Repeat value is mandatory for Repeat Interval.
{{</callout>}}

## Refresh
If you want your site to be refresh after all the Action are completed successfully you can do that by checking refresh box.

{{<callout info>}}
Refresh functionality will only trigger once all the actions are completed successfully.
{{</callout>}}

{{<callout danger>}}
#### Refresh will override Batch Repeat  
It do not work with repeat functionality. You can either use batch repeat or page refresh.
{{</callout>}}