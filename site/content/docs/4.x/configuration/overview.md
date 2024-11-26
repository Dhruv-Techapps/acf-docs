---
layout: docs
title: Configuration
description: The **Configuration** section is the core of the extension, serving as the starting point for all tasks performed by actions. Below is a detailed explanation of its fields and features
group: configuration
toc: true
---

{{<img configuration.png>}}

### Name
- **Description**: Helps make the configuration readable.
- **Details**:
  - Defaults to the URL’s origin or base URL but can be edited.
  - Can be left empty without affecting execution.

### Init Wait
- **Description**: Sets a delay before execution starts to accommodate page loading times.
- **Details**:
  - Useful for pages with slow loading times or content that loads asynchronously (e.g., single-page applications).
  - Configurable based on factors like device, browser, and network speed.

### Enable
- **Description**: A toggle to enable or disable the configuration.
- **Details**:
  - Handy for temporarily disabling configurations without deleting them.

### Export
- **Description**: Exports a single configuration in JSON format for backup or sharing.

### Import
- **Description**: Imports a single configuration into the extension.
- **Details**:
  - Adds the configuration even if one with the same URL or name already exists.

### Duplicate
- **Description**: Creates a duplicate of the configuration and adds it to the list.


This detailed documentation ensures users can understand and utilize the Configuration section effectively, enabling smooth automation and task execution.

