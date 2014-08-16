# CustomeElements-Register
Register your Regular Component to Custom Elements.

## Usage
 Use bower to install the script.
```javascript
	bower install regular-register
```

Then define your component and register it.
```javascript
	var MyComponent = Regular.extend(...);
    Regular.registerElement('r-mycomponent', MyComponent);
```
After that, you are free to go:
```html
	<html>
    <head>
    	<script src="bower_components/regularjs/dist/regular.js"></script>
        <script src="bower_components/regular-register/regular-register.js"></script>
    </head>
	<body>
    	<r-mycomponent attribute="value" ...></r-mycomponent>
    </body>
    </html>
```
*Warning*: At this time, it only works in browers that support web components natively.

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.