(function() {
  'use strict';

  function HTMLDotReporter(runner) {
    var passes = 0;
    var failures = 0;
    var pending = 0;
    var startTime = new Date();
    var endTime;

    var root = document.getElementById('mocha');

    var screen = document.createElement('pre');
    screen.style.whiteSpace = 'pre-wrap';
    screen.style.wordWrap = 'break-word';
    root.appendChild(screen);

    var failureDetails = document.createElement('pre');
    root.appendChild(failureDetails);

    runner.on('pass', function(test) {
      passes++;

      var dot = createDot(test.fullTitle());
      screen.appendChild(dot);
    });

    runner.on('pending', function(test) {
      pending++;

      var asterisk = createAsterisk(test.fullTitle());
      screen.appendChild(asterisk);
    });

    runner.on('fail', function(test, error) {
      failures++;

      var testTitle = test.fullTitle();

      var f = createF(testTitle, error.message);
      screen.appendChild(f);

      var details = createDetails(testTitle, error.stack);
      failureDetails.appendChild(details);
    });

    runner.on('end', function() {
      var end = createEnd(passes, failures, pending);
      screen.appendChild(end);

      endTime = new Date();

      var durationReport = createDurationReport(startTime, endTime);
      root.appendChild(durationReport);
    });
  }

  function createDot(testTitle) {
    var dot = document.createElement('code');

    dot.title = testTitle;
    dot.textContent = '.';
    dot.className = 'success';

    return dot;
  }

  function createAsterisk(testTitle) {
    var dot = document.createElement('code');

    dot.title = testTitle;
    dot.textContent = '*';
    dot.className = 'pending';

    return dot;
  }

  function createF(testTitle, errorMessage) {
    var f = document.createElement('code');

    f.title = testTitle + ': ' + errorMessage;
    f.textContent = 'F';
    f.className = 'failure';

    return f;
  }

  function createDetails(testTitle, errorStack) {
    var details = document.createElement('pre');

    details.style.whiteSpace = 'pre-line';
    details.textContent = testTitle + ':\n' + errorStack;
    details.className = 'failure-detail';

    return details;
  }

  function createEnd(passes, failures, pending) {
    var end = document.createElement('code');

    end.textContent = '\n' + passes + ' of ' + (passes + failures) + ' passed' +
      (pending === 0 ? '' : ', ' + pending + ' pending');
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
