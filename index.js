;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['Regular'], factory);
    } else if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object' ) {
    	module.exports = factory(require('regularjs'));
    } else {
    	window['Regular'] = factory(window.Regular);
    }
}(function (Regular) {

	function registerElement(tagName, Component) {
		var proto = Object.create(HTMLElement.prototype), // custom element prototype
		data = {}, // Regular's data object
		component, // Component instance
		styleList = document.currentScript.ownerDocument.querySelectorAll('style'); // style nodes
	
		proto.createdCallback = function() {
			// copy attributes to data object
			for(var attr, i=0, attrs =this.attributes; i < attrs.length; i++) {
				attr = attrs[i];
				// should improve this
				try{
					data[attr.name] = JSON.parse(attr.value);
				}catch(e) {
					data[attr.name] = attr.value;
				}
			}
			// initialize
			component = new Component({
				data: data
			});
			//component.$inject(this.parentNode);
			
			// create shadow Root and insert all css
			var shadowRoot = this.createShadowRoot(),
				cssNodeList = [].slice.call(styleList);
			cssNodeList.forEach(function(node) {
				shadowRoot.appendChild(node);
			});
			// inject our component
			component.$inject(shadowRoot);
		};

		// called when when modify attribute
		// doesn't fire when we declare for the first time
		proto.attributeChangedCallback = function(attr, oldVal, newVal) {
			try{
				data[attr] = JSON.parse(newVal);
			}catch(e) {
				data[attr] = newVal;
			}
			component.$update();
		};

		document.registerElement(tagName, {
			prototype: proto
		});
	}

   	Regular.registerElement = registerElement;
    return Regular;
}));