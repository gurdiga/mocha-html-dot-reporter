JS_FILES=index.js test.js sample-tests.js
JSON_FILES=package.json

default: pre-commit
pre-commit: lint

include $(shell find makefiles -name '*.mk' | sort)