ESLINT_CONFIG_FILE=makefiles/lint/eslint.json
ESLINT_TIMESTAMP_FILE=makefiles/lint/eslint.timestamp
ESLINT_IGNORE_FILE=makefiles/lint/eslintignore

eslint: $(ESLINT_TIMESTAMP_FILE)
$(ESLINT_TIMESTAMP_FILE): $(JS_FILES)
	$(call eslint-do-work, $?)

eslint-force:
	$(call eslint-do-work, $(JS_FILES))

define eslint-do-work
	$(eval files=$(1))

	@echo ESLinting...
	@echo $(files)
	@eslint \
		--config $(ESLINT_CONFIG_FILE) \
		--ignore-path $(ESLINT_IGNORE_FILE) \
		$(files) && \
	touch $(ESLINT_TIMESTAMP_FILE)
endef
