LINTSPACES_TIMESTAMP_FILE=makefiles/lint/lintspaces.timestamp

lintspaces: $(LINTSPACES_TIMESTAMP_FILE)
$(LINTSPACES_TIMESTAMP_FILE): $(JS_FILES)
	$(call lintspaces-do-work, $?) && touch $(LINTSPACES_TIMESTAMP_FILE)

lintspaces-force:
	$(call lintspaces-do-work, $(JS_FILES))

define lintspaces-do-work
	$(eval files=$(1))

	@echo Space linting...
	@echo $(files)
	@lintspaces \
		--newline \
		--maxnewlines 2 \
		--trailingspaces \
		--indentation spaces \
		$(files)
endef
