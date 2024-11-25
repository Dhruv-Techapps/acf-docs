---
layout: docs
title: Action · Init Wait
description: Init Wait stands for Initial Wait. Initial Wait to start particular action. Waiting time is provided in sec. It can be used were extension starts but it require few sec for page to load fully.
group: action
toc: true
---
Init Wait can be used to delay the action with the given number of seconds. It runs only the first time when the action executes and does not run when the action is repeated in a loop. Its not mandatory field. if left blank extension will start executing right away.
{{<img action-init-wait.png>}}

{{<markdown>}}
{{<partial example-float.md>}}
{{</markdown >}}