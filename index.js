(function() {
  'use strict';

  function HTMLDotReporter(runner) {
    var passes = 0;
    var failures = 0;
    var startTime = new Date();
    var endTime;

    var root = document.getElementById('mocha');

    var screen = document.createElement('pre');
    root.appendChild(screen);

    var failureDetails = document.createElement('pre');
    root.appendChild(failureDetails);

    runner.on('pass', function(test) {
      passes++;

      var dot = createDot(test.fullTitle());
      screen.appendChild(dot);
    });

    runner.on('fail', function(test, err) {
      failures++;

      var testTitle = test.fullTitle();
      var errorMessage = err.message;

      var f = createF(testTitle, errorMessage);
      screen.appendChild(f);

      var details = createDetails(testTitle, errorMessage);
      failureDetails.appendChild(details);
    });

    runner.on('end', function() {
      var end = createEnd(passes, failures);
      screen.appendChild(end);

      endTime = new Date();

      var durationReport = createDurationReport(startTime, endTime);
      root.appendChild(durationReport);
    });
  }

  function createDot(testTitle) {
    var dot = document.createElement('code');

    dot.title = testTitle;
    dot.innerHTML = '.';
    dot.className = 'success';

    return dot;
  }

  function createF(testTitle, errorMessage) {
    var f = document.createElement('code');

    f.title = testTitle + ': ' + errorMessage;
    f.innerHTML = 'F';
    f.className = 'failure';

    return f;
  }

  function createDetails(testTitle, errorMessage) {
    var details = document.createElement('code');

    details.innerHTML = testTitle + ':\n' + errorMessage;
    details.className = 'failure-detail';

    return details;
  }

  function createEnd(passes, failures) {
    var end = document.createElement('code');

    end.innerHTML = '\n' + passes + ' of ' + (passes + failures) + ' passed';
    end.className = 'end';

    return end;
  }

  function createDurationReport(startTime, endTime) {
    var durationReport = document.createElement('pre');
    var seconds = (endTime - startTime) / 1000;
    durationReport.textContent = 'test run time: ' + seconds + 's';
    return durationReport;
  }

  window.HTMLDotReporter = HTMLDotReporter;

}());
