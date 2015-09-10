dom.compiler
============

Compile HTML extended with custom elements and attributes

Usage
-----

```html
<h1 model="title"></h1>
```

```js
var grammar = {
  model   : require('dom.grammar.model')
};

var dom   = require('dom').use({
  compile : require('dom.compiler')(grammar)
});

dom('body').compile({ title: 'It works!' });
```
