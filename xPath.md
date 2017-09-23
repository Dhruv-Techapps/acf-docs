Its little tricky but believe me its not that hard to find.

## Follow below steps to get xPath
1. Right click any button or link or whaterver you want to click in webpage and select Inspect.
2. It will open developer console and highlight that element under Elements Tab
3. Right click that element and select Copy > Copy XPath.

Thats it you have your XPath of that element now.

## Examples

| xPath | HTML |
| ------ | ------ |
|`//div/a[1]`|``<div>`<a></a>`<a></a></div>``|
|`//div/a[last()]`|<div><a></a>`<a></a>`</div>|
|`//div/a[last()-1]`|<div>`<a></a>`<a></a></div>|
|`//div/a[position()>3]`|<div>`<a></a><a></a>`<a></a></div>|
|`//a[@href]`|<div><a></a><a></a>`<a href></a>`</div>|
|`//a[@href='google.com']`|<div><a></a><a></a>`<a href="google.com"></a>`</div>|

[Inbox me](dhruv.techapps@gmail.com) if you find difficult to find xPath or you have any better suggestion for me :)
