JS_FILES=index.js test.js sample-tests.js
JSON_FILES=package.json

default: pre-commit
pre-commit: lib lint

deploy: tag push deploy
	npm publish

tag:
	git tag v`grep '"version"' package.json | grep -P -o '\d+\.\d+\.\d+'`

push:
	git push && git push --tags

include $(shell find makefiles -name '*.mk' | sort)
