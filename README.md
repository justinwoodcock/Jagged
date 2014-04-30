ui-basebox
==========

Basebox to create an awesome Angular UI

##Dependencies
1. [node](http://nodejs.org/): follow the link and click the button
2. ruby: you should have a mac and if you do it's already there
3. `gem install sass` && `gem install compass`
4. `npm install grunt grunt-cli bower -g` installs grunt, grunt-cli & bower globally.

##Ghetto Temporary Instructions
1. in terminal, navigate to the root directory (where Gruntfile.js is located)
	* install node modules: `npm install`
    * install bower packages: `bower install`
2. in the same directory run one of the following commands
	* `grunt serve`: runs all dev tasks
    * `grunt test`: runs all jasmine unit tests
    * `grunt build`: runs build tasks that minify & concat code and outputs the files to the `/dist` directory.   
