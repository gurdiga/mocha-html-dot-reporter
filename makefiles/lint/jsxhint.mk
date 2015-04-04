JSXHINT_CONFIG_FILE=$(JSHINT_CONFIG_FILE)
JSXHINT_TIMESTAMP_FILE=makefiles/lint/jsxhintrc.timestamp

jsxhint: $(JSXHINT_TIMESTAMP_FILE)
$(JSXHINT_TIMESTAMP_FILE): $(JSX_FILES)
	$(call jsxhint-do-work, $?) && touch $(JSXHINT_TIMESTAMP_FILE)

jsxhint-force:
	$(call jsxhint-do-work, $(JSX_FILES))

define jsxhint-do-work
	$(eval files=$(1))

	@echo JSXHinting...
	@echo $(files)
	@jsxhint -c $(JSXHINT_CONFIG_FILE) $(files) && \
		touch $(JSXHINT_TIMESTAMP_FILE)
endef
