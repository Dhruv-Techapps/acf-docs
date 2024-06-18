---
layout: docs
title: Overview
description: The &lt;`sessionCount`&gt; parameter plays a crucial role in managing the value field within our system. This count increments each time the page is refreshed, whether manually or through form submission. You can access the current &lt;`sessionCount`&gt; using the &lt;`sessionCount`&gt; variable.
group: session
toc: true
---


{{<img session-count.png>}}

## SessionCount Initialization

A &lt;`sessionCount`&gt; starts with a count of 1 when a new tab is opened. Each tab maintains its own &lt;`sessionCount`&gt;. Therefore, if two tabs are opened, each will have its own independent &lt;`sessionCount`&gt; starting from 1.

## Resetting the SessionCount

To reset the &lt;`sessionCount`&gt; back to 1, you can pass the query parameter `clear-acf-session=true` in the URL. This will clear the current session and start a new session with a count of 1.

### Example

https://test.getautoclicker.com?clear-acf-session=true


## Starting a SessionCount from a Specific Number

If you need to start a session from a specific number, you can pass the query parameter `acf-session-count=number` in the URL, where `number` is the desired starting session count.

### Example

To start a session with a session count of 5:

https://test.getautoclicker.com?acf-session-count=5


By using these query parameters, you can easily manage and control session counts as needed for different use cases.

## Summary

- **New Tab**: Each new tab starts with a &lt;`sessionCount`&gt; of 1.
- **Reset Session**: Use `clear-acf-session=true` to reset the session to 1.
- **Set Specific Session Count**: Use `acf-session-count=number` to start the session from a specific number.

Ensure to replace the base URL with your actual application URL when implementing these query parameters.

---

This documentation provides a concise guide on how to manage session counts effectively in your web application.
