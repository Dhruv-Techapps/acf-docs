---
layout: docs
title: Element Finder
description: Its little tricky but believe me its not that hard to find.
group: action
toc: true
---

{{<callout info>}}
Follow below steps to get XPath quickly
1. Right click any button or link or whatever you want to click in webpage and select Inspect.
2. It will open developer console and highlight that element under Elements Tab
3. Right click that element and select Copy > Copy XPath.
4. Thats it you have your XPath of that element now.
{{</callout>}}

### XPath
Xpath helps to track down and element using its document chain examples are below

{{<callout warning>}}
  Combine [batch-repeat]({{<docsref "/batch/repeat">}}) with xpath to iterate over elements one by one. e.g if Xpath of element is like table format and you need to iterate all its row one by one. `//table/tr[1]/td[1]/button` this xpath will select button of fist row. now replace it will `//table/tr[<batchRepeat>]/td[1]/button` and under batch repeat add value like 5 or 10 based on number of rows. Now when batch repeat all action one by one it will replace `<batchRepeat>` value with index from 1 to 10
{{</callout>}}

{{<markdown>}}
{{<partial example-xpath.md>}}
{{</markdown >}}

### Get Element By Id
If an element tag is having `id="idValue"` attribute on it you can simply make use of `#idValue` to target that element. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly

Only single element get selected. If there are two element within page with same id first one will be getting selected.

{{<callout info>}}
  Referring below html section
- `#inputEmail` To target element with id attribute as `id="inputEmail"`
- `#inputPassword` To target element with id attribute as `id="inputPassword"`
{{</callout>}}
```html
<main class="form-signin">
  <form>
    <label for="inputEmail">Email address</label>
    <input type="email" id="inputEmail" class="form-control"> 👈 selected
    <label for="inputPassword">Password</label>
    <input type="password" id="inputPassword" class="form-control"> 👈 selected
    <button class="btn btn-primary" type="submit">Sign in</button>
  </form>
</main>
```

### Get Elements By ClassName
If an element tag is having `class="class-1 class-2 class-3"` attribute on it you can simply make use of `ClassName::class-1 class-2 class-3` to target that element.

More than one element get selected. If there are two element within page with same class name both will be selected and action will be performed on both elements.

{{<callout info>}}
 Referring below html section
- `ClassName::form-control` To target elements with class attribute as `class="form-control"`
- `ClassName::btn btn-primary` To target elements with class attribute as `class="btn btn-primary"`
{{</callout>}}
```html
<main class="form-signin">
  <form>
    <label for="inputEmail">Email address</label>
    <input type="email" id="inputEmail" class="form-control"> 👈 selected
    <label for="inputPassword">Password</label>
    <input type="password" id="inputPassword" class="form-control"> 👈 selected
    <button class="btn btn-primary" type="submit">Sign in</button> 👈 selected
  </form>
</main>
```

### Get Elements By Name
If an element tag is having `name="nameOfElement"` attribute on it you can simply make use of `Name::nameOfElement` to target that element.

More than one element get selected. If there are two element within page with same name both will be selected and action will be performed on both elements.

{{<callout info>}}
Referring below html section
- `Name::email` To target elements with name attribute as `name="email"`
- `Name::password` To target elements with name attribute as `name="password"`
{{</callout>}}
```html
<main class="form-signin">
  <form>
    <label for="inputEmail">Email address</label>
    <input type="email" id="inputEmail" class="form-control" name="email"> 👈 selected
    <label for="inputPassword">Password</label>
    <input type="password" id="inputPassword" class="form-control" name="password"> 👈 selected
    <button class="btn btn-primary" type="submit">Sign in</button>
  </form>
</main>
```
### Get Elements By Tag Name
To target specific elements by its tag name you can simply make use of `TagName::tagNameOfElement`.

More than one element get selected. If there are two element within page with same tag name both will be selected and action will be performed on both elements.

{{<callout info>}}
Referring below html section
- `TagName::main` To target elements with tag name as `<main>`
- `TagName::form` To target elements with tag name as `<form>`
- `TagName::input` To target elements with tag name as `<input>`
- `TagName::label` To target elements with tag name as `<label>`
- `TagName::button` To target elements with tag name as `<button>`
{{</callout>}}
```html
<main class="form-signin">
  <form>
    <label for="inputEmail">Email address</label>
    <input type="email" id="inputEmail" class="form-control" name="email">
    <label for="inputPassword">Password</label>
    <input type="password" id="inputPassword" class="form-control" name="password">
    <button class="btn btn-primary" type="submit">Sign in</button>
  </form>
</main>
```

### Query Selector
To target specific element by its different attributes you can simply make use of `querySelector::selectors`.

Single element get selected. If there are two element within page with same selectors first will be selected and action will be performed on it.

{{<callout info>}}
Referring below html section
- `querySelector::main.form-signin` To target elements with tag name as `<main class="form-signin">`
- `querySelector::form` To target elements with tag name as `<form>`
- `querySelector::input[type="email"]` To target elements with tag name as `<input type="email">`
- `querySelector::input[type="password"]` To target elements with tag name as `<input type="password">`
- `querySelector::label[for]` To target elements with tag name as `<label for="anything">`
- `querySelector::button.btn.btn-primary` To target elements with tag name as `<button class="btn btn-primary">`
{{</callout>}}
```html
<main class="form-signin">
  <form>
    <label for="inputEmail">Email address</label>
    <input type="email" id="inputEmail" class="form-control" name="email">
    <label for="inputPassword">Password</label>
    <input type="password" id="inputPassword" class="form-control" name="password">
    <button class="btn btn-primary" type="submit">Sign in</button>
  </form>
</main>
```

### Query Selector All
{{<callout warning>}}
#### Important
Its similar to query selector which selects all matching element rather than selecting first matching element
{{</callout>}}