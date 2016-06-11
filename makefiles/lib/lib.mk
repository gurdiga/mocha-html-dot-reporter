lib: mocha.js chai.js

mocha.js:
	curl --fail --progress-bar https://raw.githubusercontent.com/mochajs/mocha/v2.4.5/mocha.js > $@

chai.js:
	curl --fail --progress-bar https://raw.githubusercontent.com/chaijs/chai/3.5.0/chai.js > $@
