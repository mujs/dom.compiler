domo.compiler
=============

Compile HTML extended with custom elements and attributes

Usage
-----

```html
<h1 model="title"></h1>
```

```js
var grammar = {
  model   : require('domo.grammar.model')
};

var dom   = require('domo').use({
  compile : require('domo.compiler')(grammar)
});

dom('body').compile({ title: 'It works!' });
```
