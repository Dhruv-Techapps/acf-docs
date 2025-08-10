---
layout: docs
title: Configuration
description: The Configuration section is the core of the extension and the starting point for all action-driven tasks. Below is a concise guide to its fields and features.
group: configuration
toc: true
---

{{<img configuration.png>}}

### Name
- **Purpose**: Helps make the configuration readable.
- **Details**:
  - Defaults to the URL’s origin or base URL but can be edited.
  - Can be left empty without affecting execution.

### Init Wait
- **Purpose**: Sets a delay before execution starts to accommodate page loading times.
- **Details**:
  - Useful for pages with slow loading times or content that loads asynchronously (e.g., single-page applications).
  - Configurable based on factors like device, browser, and network speed.

### Enable
- **Purpose**: A toggle to enable or disable the configuration.
- **Details**:
  - Handy for temporarily disabling configurations without deleting them.

### Export
- **Purpose**: Export a single configuration in JSON format for backup or sharing.

### Import
- **Purpose**: Import a single configuration into the extension.
- **Details**:
  - Adds the configuration even if one with the same URL or name already exists.

### Duplicate
- **Purpose**: Create a duplicate of the configuration and add it to the list.


With these options, you can manage configurations effectively and ensure smooth automation and task execution.

