(function() {
  'use strict';

  setTimeout(function() {
    try {
      var root = document.getElementById('mocha');
      var testResults = document.getElementById('test-results');

      assert(root.innerHTML.length > 0, 'the reporter rendered something');
    } catch (error) {
      testResults.innerHTML += '\n' + error.message;
    }

    function assert(condition, message) {
      if (condition) testResults.innerHTML += message + ' -- passed';
      else throw new Error(message);
    }
  });

}());
