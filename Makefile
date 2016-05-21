JS_FILES=index.js test.js sample-tests.js
JSON_FILES=package.json

default: pre-commit
pre-commit: lint

deploy:
	npm publish

tag:
	git tag v`grep '"version"' package.json | grep -P -o '\d+\.\d+\.\d+'`

include $(shell find makefiles -name '*.mk' | sort)
