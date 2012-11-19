min:
	@./node_modules/.bin/uglifyjs lib/q-reqwest.js > lib/q-reqwest.min.js

lint:
	@./node_modules/.bin/jshint lib/q-reqwest.js spec

.PHONY: lint
