(function() {
  'use strict';

  setTimeout(function() {
    var root = document.getElementById('mocha');

    assert(root.innerHTML.length > 0, 'the reporter rendered something');

    console.log('TODO: make assertions on the markup', root.innerHTML);
  });

  function assert(condition, message) {
    if (condition) console.log(message, '-- passed');
    else throw new Error(message);
  }

}());
