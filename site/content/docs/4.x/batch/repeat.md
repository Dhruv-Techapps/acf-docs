---
layout: docs
title: Repeat
description: If you want specific batch to repeat more than once you can provide repeat value. 
group: batch
toc: true
---

{{<img batch.png>}}

Its also used within ElementFinder Xpath and value to be replaces with the value of batch repeat index. e.g. If Element Finder need to be iterated over number of rows in table for that xpath will be `//table/tr[1]/td[1]/button` well this will only select the first row button and if you want to iterate the process for all button you can make use of batch repeat here like `//table/tr[<batchRepeat>]/td[1]/button` like this and repeat number 3 will iterate first three rows of table like [1..3].

{{<callout>}}
positive numeric value `1` to `999`
{{</callout >}}