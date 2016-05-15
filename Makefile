JS_FILES=index.js
JSON_FILES=package.json

default: lint

include $(shell find makefiles -name '*.mk' | sort)
