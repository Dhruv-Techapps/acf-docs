
---
layout: docs
title: Function
description: Perform browser specific functions using `func::` command its limited to browser specific functions only and not user defined.
group: action-value
toc: true
---

<span>Now run browser default API functions or custom func from extension directly. This feature is still under development and we will provide better location to run command from action. Run one or more than one command by separating them using `;` <br/>`Func::console.log("Hello");console.log("World");`</span>

{{<img func-command.png>}}

{{<callout danger>}}

#### Func methods

One important warning in advance: Malicious scripts can violate your privacy and act on your behalf!

- You should create script own. for simpler functionality like calling a function and all.
- If you not sure how to what all functions are available then You should only run scripts from sources you trust.
{{</callout>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col"  width="210px">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Func::console.log("Hello")</th>
    </tr>
     <tr>
      <th scope="row">Func::&lt;batchRepeat></th>
    </tr>
     <tr>
      <th scope="row">Func::&lt;actionRepeat></th>
    </tr>
    <tr>
      <th scope="row">Func::&lt;sessionCount></th>
    </tr>
    <tr>
      <th scope="row">Func::&lt;random></th>
    </tr>
    <tr>
      <th scope="row">Func::&lt;clipboardPaste></th>
    </tr>
    <tr>
      <th scope="row">Func::&lt;paste></th>
    </tr>
    <tr>
      <th scope="row">Func::&lt;paste>.split(",")[0]</th>
    </tr>
    <tr>
      <th scope="row">Func::'Lion,Elephant,Tiger,Giraffe,Zebra,Kangaroo,Penguin,Dolphin,Panda,Leopard'.split(",")[&lt;paste>]</th>
    </tr>
    <tr>
      <th scope="row">Func::new Date()</th>
    </tr>
    <tr>
      <th scope="row">Func::Date.now()</th>
    </tr>
    <tr>
      <th scope="row">Func::Date.now().getDate()</th>
    </tr>
    <tr>
      <th scope="row">Func::Date.now().getDay()</th>
    </tr>
    <tr>
      <th scope="row">Func::window.location.href</th>
    </tr>
  </tbody>
</table>

<a href="https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm" target="_blank">Javascript Inbuilt functions</a>