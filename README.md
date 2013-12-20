Storage.js
==========

This is a really simple wrapper for the window.localStorage object. It checks that the browser supports localStorage but does not provide a fallback. IE8+ and other modern browsers support localStorage so it's very doubtful most people will need a fallback.

You can provide a key so that you can namespace your storage pieces.

## Usage

Before you can use storage.js you'll need to initliaze it. This is done by calling the `init()` method. You can pass a String which will get prepended to your localStorage keys to make separation of your storage pieces from others easier.

```js
LS.init('myKey');
```

### Add to localStorage

Call the `set()` method and pass a name for your data that you want to store as the first argument. The second argument is the data to store. It can either be a String or an Object including JSON. storage.js will convert your Object to a String since localStorage can only hold Strings.

```js
LS.set('my_data', {
	"person": {
		"id": 0,
		"name": "Joe Schmoe",
		"email": "test@example.com"
	}
});
```

### Retrieve from localStorage

Getting your data out of localStorage is even simpler. Just call the `get()` method and pass the name of the data you want to get. In the set example above we used the name "my_data" to set our storage object. So to get it we just do this:

```js
LS.get('my_data');
// Output
{
	"person": {
		"id": 0,
		"name": "Joe Schmoe",
		"email": "test@example.com"
	}
}
```

Whatever the type was you put into localStorage will be the type you get out. So even though a JSON object is converted to a string it will always come back as JSON.

### Remove

Just call the `remove()` object and pass the name of the data piece you would like to delete.

```js
LS.remove('my_data');
```

## TODO

- Add error handling for quota excceded
- Add a reset method that clears out localStorage

## License

The MIT License (MIT)

Copyright (c) 2013 Michael Turnwall

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

