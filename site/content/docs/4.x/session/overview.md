---
layout: docs
title: Overview
description: The &lt;`sessionCount`&gt; parameter increments on each page refresh per tab and can be read via the sessionCount variable.
group: session
toc: true
---


{{<img session-count.png>}}

## SessionCount Initialization

`sessionCount` starts at 1 when a new tab is opened. Each tab maintains its own independent `sessionCount`. For example, two tabs opened for the same site will each start at 1.

## Resetting the SessionCount

To reset `sessionCount` back to 1, add the query parameter `clear-acf-session=true` to the URL. This clears the current session and starts a new count at 1.

### Example

https://test.getautoclicker.com?clear-acf-session=true


## Starting a SessionCount from a Specific Number

To start from a specific number, add the query parameter `acf-session-count=number` to the URL, where `number` is your desired starting count.

### Example

To start a session with a session count of 5:

https://test.getautoclicker.com?acf-session-count=5


Use these query parameters to manage and control session counts for different use cases.

## Summary

- **New Tab**: Each new tab starts with a `sessionCount` of 1.
- **Reset Session**: Use `clear-acf-session=true` to reset to 1.
- **Set Specific Session Count**: Use `acf-session-count=number` to start from a specific number.

Replace the base URL with your actual application URL when using these parameters.

---

This guide explains how to manage session counts effectively in your web application.
