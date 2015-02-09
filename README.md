#Jagged
Jagged is a launch pad for Angular webapps that speeds up the take-off

##Dependencies
These dependencies need to be installed before trying to fire up the project.

1. [node](http://nodejs.org/): follow the link and click the button
2. [ruby](https://www.ruby-lang.org/en/installation/): you should have a mac and if you do it's already there
3. `gem install sass` && `gem install compass`
4. `npm install gulp bower -g` installs gulp & bower globally.

##Instructions
Follow these instructions to fire up jagged after ensuring you have all dependencies listed above installed in your environment.

1. in your terminal, navigate to the root directory (where gulpfile.js is located)
	* install node modules: `npm install`
    * install bower packages: `bower install`
2. in the same directory run one of the following gulp tasks

## Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp wiredep` to fill bower dependencies in your `.html` file(s)
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

##Thirdparty Resources
These are our frontend packages that are maintained with bower

* [AngularJS:](http://angularjs.org)
	* [UI Router:](https://github.com/angular-ui/ui-router)
	* [UI Bootstrap:](http://angular-ui.github.io/bootstrap)
	* [RESTangular:](https://github.com/mgonto/restangular)
* [SASS/Compass](http://sass-lang.com/)
* [Bootstrap:](http://getbootstrap.com/css/)
* [Fontello:](http://fontello.com/)

## Directory structure

[Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

<pre>
├──  src/
│   ├──  app/
│   │   ├──  jagged/
│   │   │   ├──  jagged.config.js
│   │   │   ├──  jagged.controller.js
│   │   │   ├──  jagged.controller.spec.js
│   │   │   ├──  jagged.factory.js
│   │   │   ├──  jagged.routing.js
│   │   ├──  jagged.module.js
│   │   ├──  jagged.scss
│   │   └──  vendor.scss
│   ├──  assets/
│   │   └──  images/
│   │   └──  fonts/
│   ├──  components/
│   │   ├──  _template/
│   │   │   ├──  template.controller.js
│   │   │   ├──  template.controller.spec.js
│   │   │   ├──  template.index.html
│   │   │   └──  template.scss
│   │   ├──  auth/
│   │   │   ├──  auth.factory.js
│   │   ├──  footer/
│   │   │   ├──  footer.index.html
│   │   │   └──  footer.scss
│   │   ├──  header/
│   │   │   ├──  header.index.html
│   │   │   └──  header.scss
│   │   ├──  home/
│   │   │   ├──  home.controller.js
│   │   │   ├──  home.controller.spec.js
│   │   │   ├──  home.index.html
│   │   │   └──  home.scss
│   ├──  404.html
│   ├──  favico.ico
│   └──  index.html
├──  gulp/
├──  e2e/
├──  bower_components/
├──  nodes_modules/
├──  .bowerrc
├──  .editorconfig
├──  .gitignore
├──  .jshintrc
├──  bower.json
├──  gulpfile.js
├──  karma.conf.js
├──  package.json
├──  protractor.conf.js
</pre>
