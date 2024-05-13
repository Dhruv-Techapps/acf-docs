
---
layout: docs
title: Form Events
description: Perform form specific events on input field and button of form.
group: action-value
toc: true
---

{{<img form-events.png>}}

<table class="table">
  <thead>
    <tr>
      <th scope="col">FormEvents::</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">FormEvents::blur</th>
      <td>It will trigger blur event on the element.<br> It removed focus from the element.</td>
    </tr>
    <tr>
      <th scope="row">FormEvents::click</th>
      <td>It will click the form element.</td>
    </tr>
     <tr>
      <th scope="row">FormEvents::click-once</th>
      <td>Our program features an intelligent click behavior that ensures elements are clicked only once, if the page is not fully refreshed. Let’s illustrate this with an example:

Suppose there are five posts available on a page. If extension clicks an element once, our program registers that action. Now, if additional posts are loaded (e.g., through a “Load More” button), the program will not re-click the previously clicked posts. It intelligently avoids redundant clicks, providing a seamless user experience.

By implementing this behavior, we enhance efficiency and prevent unintended interactions. Users can confidently interact with elements without worrying about accidental double-clicks. </td>
    </tr>
    <tr>
      <th scope="row">FormEvents::focus</th>
      <td>It will trigger focus event on the element.</td>
    </tr>
    <tr>
      <th scope="row">FormEvents::select</th>
      <td>It will trigger select event on the element.<br> In input field and textarea it will select the text inside</td>
    </tr>
    <tr>
      <th scope="row">FormEvents::submit</th>
      <td>It will submit the form in which element is present.</td>
    </tr>
    <tr>
      <th scope="row">FormEvents::clear</th>
      <td>It will trigger clear event on the element.<br> It clears field value.</td>
    </tr>
    <tr>
      <th scope="row">FormEvents::remove</th>
      <td>It will remove element.</td>
    </tr>
  </tbody>
</table>