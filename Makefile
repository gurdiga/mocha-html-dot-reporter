JS_FILES=index.js test.js sample-tests.js
JSON_FILES=package.json

default: pre-commit
pre-commit: lib lint

deploy: tag push
	npm publish

VERSION=`$(call get_package_version)`
tag:
	git tag $(VERSION)
	git tag --force latest-release $(VERSION)

push:
	git push
	git push --tags --force

define get_package_version
	grep '"version"' package.json |\
		grep -P -o '\d+\.\d+\.\d+' |\
		sed 's/^/v/'
endef

include $(shell find makefiles -name '*.mk' | sort)
