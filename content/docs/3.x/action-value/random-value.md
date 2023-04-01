---
layout: docs
title: Random Value
description: Now fill generate random value into form fields
group: action-value
toc: true
---

{{<img action-random.png>}}

> By Default the length of string is fixed to 6 and filter is set to all character + numbers + symbol so when you use `<random>` you will get random string of length 6 with mix of char + num + symbol

<table class="table">
  <thead>
    <tr>
      <th scope="col"  width="210px">&lt;random&gt;</th>
      <th scope="col">Description (Generate Random value)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">&lt;random[.]{6}&gt;</th>
      <td>
        <code>[.]</code> - Any Single Character <code>{6}</code> - no of characters 6
        <ul>
          <li>X0UN#Z</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">&lt;random[.]{6,12}&gt;</th>
      <td>
        <code>[.]</code> - Any single character <code>{6,12}</code> - no of characters between 6 and 12
        <ul>
          <li>Dr_5t4r</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">&lt;random[a-z]{6}&gt;</th>
      <td>
        <code>[a-z]</code> - A character in the range: a-z
        <ul>
          <li>czlvry</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">&lt;random[A-Z]{6}&gt;</th>
      <td>
        <code>[A-Z]</code> - A character in the range: A-Z
        <ul>
          <li>UDDDJT</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">&lt;random[\d]{6}&gt;</th>
      <td>
        <code>[\d]</code> - A digit
        <ul>
          <li>546544</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">&lt;random[\w]{6}&gt;</th>
      <td>
        <code>[\w]</code> - A word character
        <ul>
          <li>Ae3fFD</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" width="120px">&lt;random[custom]{6}&gt;</th>
      <td>
        <code>[custom]</code> - A custom string character
        <ul>
          <li>csuotm</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>