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
    <script src="bower_components/regular-register/index.js"></script>
  </head>
	<body>
  	<r-mycomponent attribute="value" ...></r-mycomponent>
  </body>
</html>
```
*Warning*: At this time, it only works in browers that support web components natively.

## License

  The MIT License (MIT)