[![Code Climate](https://codeclimate.com/github/gurdiga/mocha-html-dot-reporter/badges/gpa.svg)](https://codeclimate.com/github/gurdiga/mocha-html-dot-reporter)

A Mocha browser reporter that draws a line of dots and “F”s. To use it, say:
```javascript
mocha.reporter(HTMLDotReporter);
```

Use CSS to style `pre`, `pre .success`, `pre .failure`, `pre .end`, and
`pre .failure-detail` inside `#mocha` to style pieces.

Here is a sample output:
```
..........................................................F....................
...............................................................................
...............................................................................
....
240 of 241 passed

The smoke test fails:
expected 'this failing test' to not exist

test run time: 0.016s
```

### Tests

Yes, this is a test reporter that has tests itself! 8-)

Just open `tests.html` in the browser (You need to be on-line because
tge test runner comes from a CDN. -- I wanted to keep the source code as
lean as possible.)
