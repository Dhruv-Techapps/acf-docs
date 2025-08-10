---
layout: docs
title: Action · Element Finder
description: Find page elements using XPath or selectors—quick tips, patterns, and examples.
group: action
toc: true
---

{{<callout info>}}
Quickly copy an XPath with DevTools:
1. Right‑click the target element (button, link, input) and choose Inspect.
2. In the Elements panel, ensure the element is highlighted.
3. Right‑click the highlighted node and choose Copy → Copy XPath.
4. Paste the XPath into the Element Finder.
{{</callout>}}

### XPath
XPath locates an element by its position and attributes in the DOM tree. See examples below.

{{<markdown>}}
{{<partial example-xpath.md>}}
{{</markdown>}}

### Get element by ID
When an element has an id attribute (for example, `id="idValue"`), you can target it with `#idValue`.

Notes:
- IDs are intended to be unique. If duplicates exist, the first match is selected.

{{<callout info>}}
Referring to the HTML below:
- `#inputEmail` targets `id="inputEmail"`.
- `#inputPassword` targets `id="inputPassword"`.
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

### Get elements by class name
When an element has a class list (for example, `class="class-1 class-2"`), target it with `ClassName::class-1 class-2`.

Notes:
- This selector can match multiple elements. The action is applied to each match.

{{<callout info>}}
Referring to the HTML below:
- `ClassName::form-control` targets `class="form-control"` inputs.
- `ClassName::btn btn-primary` targets `class="btn btn-primary"` buttons.
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

### Get elements by name
When an element has a name attribute (for example, `name="email"`), target it with `Name::email`.

Notes:
- This selector can match multiple elements. The action is applied to each match.

{{<callout info>}}
Referring to the HTML below:
- `Name::email` targets `name="email"`.
- `Name::password` targets `name="password"`.
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

### Get elements by tag name
To target all elements of a given tag, use `TagName::tagNameOfElement`.

Notes:
- This selector matches all elements with the specified tag. The action is applied to each match.

{{<callout info>}}
Referring to the HTML below:
- `TagName::main` targets `<main>`.
- `TagName::form` targets `<form>`.
- `TagName::input` targets `<input>`.
- `TagName::label` targets `<label>`.
- `TagName::button` targets `<button>`.
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

### Query Selector (single)
To target a specific element by CSS selector, use `querySelector::selector`.

Notes:
- Selects the first matching element. If multiple elements match, only the first is used.

{{<callout info>}}
Referring to the HTML below:
- `querySelector::main.form-signin` targets `<main class="form-signin">`.
- `querySelector::form` targets `<form>`.
- `querySelector::input[type="email"]` targets `<input type="email">`.
- `querySelector::input[type="password"]` targets `<input type="password">`.
- `querySelector::label[for]` targets `<label for="…">`.
- `querySelector::button.btn.btn-primary` targets `<button class="btn btn-primary">`.
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

### Query Selector All (multiple)
{{<callout warning>}}
Important: Works like Query Selector, but selects all matching elements instead of only the first one. The action is applied to each matched element.
{{</callout>}}

## Dynamic XPath
{{<callout info>}}
- [batch-repeat]({{<docsref "/configuration/batch#repeat">}}): iterate over rows using a placeholder in the XPath. For example, to click the button in each row: base XPath `//table/tr[1]/td[1]/button` → `//table/tr[<batchRepeat>]/td[1]/button`.
- [action-repeat]({{<docsref "/action/overview#repeat">}}): iterate over columns or repeated targets within a row. Example: `//table/tr[1]/td[<actionRepeat>]/button`.
- [session-count]({{<docsref "/session/overview">}}): refer to the current session number. Example: `//table/tr[1]/td[<sessionCount>]/button`.
{{</callout>}}