#Jagged
ES6 seed boasting Angular Material transpiled by Babel using SystemJS to load JSPM managed packages.

### Install & Run

1. `npm install -g gulp jspm`
2. `npm install`
3. `gulp run`

### Tasks

- `gulp test` -- run karma tests using Chrome
- `npm test` -- run karma tests using PhantomJS (for Travis CI)
- `npm run-script protractor-setup; npm run-script protractor-run` -- setup and run protractor
- `gulp lint` -- run jshint
- `export SITUATION=production && gulp run` -- bundle, cache bust, minify and run in production mode

### Tech

- Angular
- Material Design
- Babel
- SystemJS
- JSPM