define('domo.compiler', function (require) {
  'use strict';

  var isFunction = require('mu.is.function'),
      each       = require('mu.list.each'),
      copy       = require('mu.list.copy'),
      attr       = require('domo.attr');

  var compiler = function (grammar) {
    var compile = function (node, scope) {
      var elementName = node.tagName.toLowerCase(),
          attributes = attr(node),
          breakCompilation;

      var tokens = copy(attributes);
      tokens[elementName] = true;

      each(tokens, function (item, index) {
        var token = grammar[index];
        if (!isFunction(token)) { return; }
        breakCompilation = token(node, attributes, scope, compile);
      });

      if (breakCompilation) { return; }

      each(node.childNodes, function (node) {
        compile(node, scope);
      });
    };

    return compile;
  };

  return compiler;
});
