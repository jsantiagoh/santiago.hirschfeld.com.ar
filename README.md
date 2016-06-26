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
[X] Bootstrap from webpack and npm installation.
[X] Sass localized to components.
[ ] dev.js, dist.js and test.js could use a better common config.
[ ] Improve navbar and header
[ ] Redux.
[ ] Router and Redux router.

Others
------
- [Some nice icons](http://www.freepik.com/free-photos-vectors/cargo)

References
----------
- [Setting up Webpack for ES6, React, SASS and Bootstrap](http://andrejgajdos.com/setting-up-webpack-for-es6-react-sass-and-bootstrap/)
