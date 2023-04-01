---
layout: docs
title: Class
description: Update the class attribute of and element selected using element finder
group: action-value
toc: true
---

{{<img action-class.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">Class::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" width="120px">
        Class::add::className<br/>
        e.g. Class::add::btn
      </th>
      <td>Now add new class to element using class syntax.
        <ul>
          <li>&lt;input class="button"> -> &lt;input class="button <b>btn</b>"></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" width="120px">
        Class::remove::className<br/>
        e.g. Class::remove::btn
      </th>
      <td>Now remove new class from element using class syntax.
        <ul>
          <li>&lt;input class="button <b>btn</b>"> -> &lt;input class="button"></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" width="120px">
        Class::replace::removeClassName::addClassName<br/>
        e.g. Class::replace::unlike::like
      </th>
      <td>Now replace one class with another to element using class syntax.
        <ul>
          <li>&lt;span class="<b>unlike</b>"> -> &lt;span class="<b>like</b>"></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" width="120px">Class::clear</th>
      <td>Now remove all class of element using class syntax.
        <ul>
          <li>&lt;input class="<b>btn btn-primary button</b>"> -> &lt;input class=""></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>