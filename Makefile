.PHONY: test

test:
	docker-compose run webapp npm test

test-watch:
	docker-compose run webapp run test:watch

run:
	docker-compose up

prod:
	docker-compose -f docker-compose-prod.yml up --build
