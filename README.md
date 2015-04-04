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
```
