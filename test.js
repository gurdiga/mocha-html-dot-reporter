(function() {
  'use strict';

  setTimeout(function() {
    try {
      var root = document.getElementById('mocha');
      var testResults = document.getElementById('test-results');

      assertEqual(root.innerHTML.length > 0, true, 'rendered something');

      var screen = root.firstChild;
      assertEqual(screen.style.whiteSpace, 'pre-wrap', 'screen has the appropriate white-space wrapping');
      assertEqual(screen.style.wordWrap, 'break-word', 'screen wraps the long line of dots and Fs');

      var firstResult = root.querySelector('pre:nth-child(1)>code:nth-child(1)');
      assertEqual(toString(firstResult), '[object HTMLElement]', 'first result is rendered');
      assertEqual(firstResult.className, 'success', 'first result is a success');
      assertEqual(firstResult.textContent, '.', 'first result renders a dot');
      assertEqual(firstResult.title, 'tests this one will pass', 'first result’s dot has the appropriate title');

      var secondResult = root.querySelector('pre:nth-child(1)>code:nth-child(2)');
      assertEqual(toString(secondResult), '[object HTMLElement]', 'second result is rendered');
      assertEqual(secondResult.className, 'failure', 'second result is a success');
      assertEqual(secondResult.textContent, 'F', 'second result renders an F');
      assertEqual(secondResult.title,
        'tests this one will fail: this is a long assertion failure message ' +
        'that should come out in the failure details section and should wrap: ' +
        'expected true to equal false',
        'second result’s F has the appropriate title');

      var thirdResult = root.querySelector('pre:nth-child(1)>code:nth-child(3)');
      assertEqual(toString(thirdResult), '[object HTMLElement]', 'third result is rendered');
      assertEqual(thirdResult.className, 'success', 'third result is a success');
      assertEqual(thirdResult.textContent, '.', 'third result renders a dot');
      assertEqual(thirdResult.title, 'tests this one will pass too', 'third result’s dot has the appropriate title');

      var summary = root.querySelector('pre:nth-child(1)>code:nth-child(4)');
      assertEqual(toString(summary), '[object HTMLElement]', 'summary is rendered');
      assertEqual(summary.className, 'end', 'fourth thing is the summary');
      assertEqual(summary.textContent.trim(), '2 of 3 passed', 'summary tells how many of how many passed');
      assertEqual(summary.querySelectorAll('.number').length, 2, 'summary emphasizes the number');

      var failureDetails = root.querySelector('pre:nth-child(2)>pre:nth-child(1)');
      assertEqual(toString(failureDetails), '[object HTMLPreElement]', 'failure details are rendered');
      assertEqual(failureDetails.className, 'failure-detail', 'failure details have the appropriate class');
      assertEqual(failureDetails.style.whiteSpace, 'pre-line', 'wrap the assertion failure message');
      assertEqual(failureDetails.textContent, 'tests this one will fail:\n' +
        'AssertionError: this is a long assertion failure message that should come out in the ' +
          'failure details section and should wrap: expected true to equal false\n' +
        '    at Context.<anonymous> (sample-tests.js:10:23)',
        'prints the failure details');

      var duration = root.querySelector('pre:nth-child(3)');
      assertEqual(toString(duration), '[object HTMLPreElement]', 'duration report is rendered');
      assertEqual(duration.textContent.length > 0, true, 'duration report has some text');
      assertEqual(/test run time: \d+.\d{1,3}s/.test(duration.textContent), true, 'duration report looks like a number of seconds');
    } catch (error) {
      testResults.innerHTML += '\n<strong>FAILED: ' + error.message + '</strong>';
    }

    function assertEqual(actual, expected, message) {
      if (actual === expected) testResults.innerHTML += '\nPASSED: ' + message;
      else throw new Error(message + '.\n\texpected: ' + expected + '\n\tactual:   ' + actual);
    }

    function toString(thing) {
      return Object.prototype.toString.apply(thing);
    }
  });

}());
