install: 
	yarn
start:
	yarn start
test:
	yarn test
coverage:
	npm test -- --coverage
	npm run reporter < coverage/lcov.info

.PHONY: coverage