JSHINT_CONFIG_FILE=makefiles/lint/jshintrc.json
JSHINT_TIMESTAMP_FILE=$(JSHINT_CONFIG_FILE)

jshint: $(JSHINT_TIMESTAMP_FILE)
$(JSHINT_TIMESTAMP_FILE): $(JS_FILES)
	$(call jshint-do-work, $?) && touch $(JSHINT_TIMESTAMP_FILE)

jshint-force:
	$(call jshint-do-work, $(JS_FILES))

define jshint-do-work
	$(eval files=$(1))

	@echo JSHinting...
	@echo $(files)
	@jshint -c $(JSHINT_CONFIG_FILE) $(files) && \
		touch $(JSHINT_TIMESTAMP_FILE)
endef
