JSON_FILES=$(shell \
	find . -regextype posix-extended \
		-type d -regex '^./(lib|node_modules)' -prune \
		-type f \
		-or -name '*.json' \
)
JSONLINT_TIMESTAMP_FILE=makefiles/lint/jsonlint.timestamp

jsonlint: node_modules/json-lint $(JSONLINT_TIMESTAMP_FILE)
$(JSONLINT_TIMESTAMP_FILE): $(JSON_FILES)
	$(call jsonlint-do-work, $?)

jsonlint-force: node_modules/json-lint
	$(call jsonlint-do-work, $(JSON_FILES))

node_modules/json-lint:
	npm install json-lint@0.1.0

define jsonlint-do-work
	$(eval files=$(1))

	@echo JSONLinting...
	@echo $(files)
	@node makefiles/lint/jsonlint.js $(files) && \
		touch $(JSONLINT_TIMESTAMP_FILE)
endef
