install: 
	yarn
start:
	yarn start
test:
	yarn test
coverage:
	yarn test -- --coverage
	yarn run reporter < coverage/lcov.info

.PHONY: coverage