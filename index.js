(function() {
  'use strict';

  function HTMLDotReporter(runner) {
    var passes = 0;
    var failures = 0;

    var root = document.getElementById('mocha');
    var screen = document.createElement('pre');
    root.appendChild(screen);
    var failureDetails = document.createElement('pre');
    root.appendChild(failureDetails);

    runner.on('pass', function(test) {
      passes++;
      var dot = document.createElement('code');
      dot.title = test.fullTitle();
      dot.innerHTML = '.';
      dot.className = 'success';
      screen.appendChild(dot);
    });

    runner.on('fail', function(test, err) {
      failures++;
      var f = document.createElement('code');
      f.title = test.fullTitle() + ': ' + err.message;
      f.innerHTML = 'F';
      f.className = 'failure';
      screen.appendChild(f);

      var details = document.createElement('code');
      details.innerHTML = test.fullTitle() + ':\n' + err.message;
      details.className = 'failure-detail';
      failureDetails.appendChild(details);
    });

    runner.on('end', function() {
      var end = document.createElement('code');
      end.innerHTML = '\n' + passes + ' of ' + (passes + failures) + ' passed';
      end.className = 'end';
      screen.appendChild(end);
    });
  }

  window.HTMLDotReporter = HTMLDotReporter;

}());
