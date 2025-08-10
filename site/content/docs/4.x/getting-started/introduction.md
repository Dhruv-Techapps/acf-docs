---
layout: docs
title: Introduction
description: Auto Clicker – Auto Fill helps you automate clicks and form fills on any website by defining targets and actions.
group: getting-started
aliases:
  - "/docs/3.1/getting-started/"
  - "/docs/getting-started/"
  - "/getting-started/"
toc: true
---

## Quick start

1) [Download the extension]({{<docsref "/getting-started/download">}}) and install it in Chrome or Edge.
2) Open the web page where you want to automate clicks or fills.
3) Right‑click any element (`button`, `input`, `textarea`, etc.) and choose <kbd>{{<param name>}}</kbd>.
  - Pick `★ Configure for this Field` to auto-fill:
    - The page [URL]({{<docsref "/configuration/url">}})
    - The [Element Finder]({{<docsref "/action/element-finder">}}) for the selected element
  - Or pick [☉ Auto Clicker (Record)]({{<docsref "/record/overview">}}) to record your actions and auto‑create a configuration.


## Additional (Advance)
- [Configuration List]({{<docsref "/config-list/overview">}}) - it consist of all configuration
  - [Configuration]({{<docsref "/configuration/overview">}}) - combination of url and actions
    - [Configuration Settings]({{<docsref "/configuration/config-settings">}})
    - [Batch]({{<docsref "/configuration/batch">}}) - set of actions
      - [Action]({{<docsref "/action/overview">}}) - combination of element finder and action which need to be performed.
      - [Action Value]({{<docsref "/action-value/overview">}}) 
      - [Action Settings]({{<docsref "/action/action-settings">}})
      - [Action Condition]({{<docsref "/action/action-condition">}})
        - [Addon]({{<docsref "/addon/overview">}}) - add condition before action
- [Global Settings]({{<docsref "/settings/overview">}}) - global setting how extension should work


## New to the extension? Start here

- [Check out the video on YouTube](https://youtu.be/M3yNuBkJW3g)
- [Check out the documentation](https://getautoclicker.com/docs/)
- [Try out our extension on the test page](https://test.getautoclicker.com/)
- [Run into an issue? Chat on Discord](https://discord.gg/hArVQns)

### Try it now on the test page

- URL: https://test.getautoclicker.com/
- Goal: Fill username and click a button

Steps
1) Open the page above.
2) Add [Action]({{<docsref "/action/overview">}}) 1
  - [Element Finder]({{<docsref "/action/element-finder">}}): `//input[@name="username"]`
  - [Value]({{<docsref "/action-value/overview">}}): Your name
3) Add [Action]({{<docsref "/action/overview">}}) 2
  - [Element Finder]({{<docsref "/action/element-finder">}}): `//button[@random]`
  - [Value]({{<docsref "/action-value/overview">}}): leave blank (blank value triggers click)
4) Save and run.

Tips
- Use right‑click → <kbd>{{<param name>}}</kbd> → `★ Configure for this Field` to auto‑capture the [Element Finder]({{<docsref "/action/element-finder">}}).
- If the page loads slowly, set an [Init Wait]({{<docsref "/configuration/overview#init-wait">}}).

### Set up Global Settings (recommended)

Global settings control how the extension behaves across all configurations.

1) Open [Global Settings]({{<docsref "/settings/overview">}}).
2) Consider setting:
  - Start mode: [Auto or Manual]({{<docsref "/configuration/config-settings#start--auto--manual-">}})
  - Hotkey: Define a shortcut to start in Manual mode (e.g., `Ctrl + Shift + A`)
  - Extension Load event: Window vs Document for faster startup
  - Status Bar location: Adjust or disable if needed
3) Save changes and refresh your target page.

## Community

Stay up to date on the features of {{<param name>}} and reach out to the community with these helpful resources.

- Connect with us on Discord [The Official Discord server]({{< param discord >}}).
- Read and subscribe to [The Official AutoClicker Blog]({{< param blog >}}).
- Ask and explore our [GitHub Discussions]({{< param discussion >}}).

You can also follow @getautoclicker on Twitter for the latest gossip and awesome music videos.
