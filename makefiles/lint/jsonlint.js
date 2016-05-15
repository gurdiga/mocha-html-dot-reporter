/*eslint-env node, commonjs */
/*eslint strict: [2, "global"]*/
'use strict';

var files = process.argv.slice(2);
var jsonLint = require('json-lint');
var fs = require('fs');

files.forEach(function(file) {
  try {
    var json = fs.readFileSync(file, 'utf-8');
    var options = { comments: true };
    var result = jsonLint(json, options);

    if (result.error) {
      console.error('JSON linting error at %s:%d:%d: %s',
        file,
        result.line,
        result.character,
        result.error
      );
    }
  } catch (e) {
    console.error('jsonlint error:', e.stack);
  }
});
