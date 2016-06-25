Horizon MCP: Web app
====================

Development
-----------
### Requirements:
- [Docker](https://www.docker.com)
- [Docker Compose](https://www.docker.com/products/docker-compose)
- [Nodejs](https://nodejs.org)
  - Only for issuing `npm run docker:dev`

### Run
```
$ docker-compose up
```

#### Run Unit tests
```
$ docker-comopse run webapp npm test
$ docker-comopse run webapp npm run test:watch
```

Deploy & Production
-------------------

TODO
----
- Bootstrap from webpack and npm installation

- Redux
- Router

Others
------
- [Some nice icons](http://www.freepik.com/free-photos-vectors/cargo)
