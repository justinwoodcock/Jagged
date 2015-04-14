'use strict';

// The nicedate filter uses moment.js to display dates in nicer formats, refer
// to the docs to create new patterns: http://momentjs.com/docs/#/displaying/
// usage: {{ myDate | nicedate : 'dddd, MMMM Do, YYYY @ hh:mma' }}
angular.module('jagged').filter('nicedate', function() {
    return function(timestamp, pattern) {
        var nicedate = moment.unix(timestamp).format(pattern);
        return nicedate;
    };
});

// The replace filter is string.replace() for use in template logic
// and yes, it does allow for global or single replace
// usage: {{ myString | replace : '[ _]' : '-' }}
angular.module('jagged').filter('replace', function() {
    return function(string, pattern, replacement, global) {
        global = typeof global === 'undefined' ? true : global;
        try {
            return (string || '').replace(new RegExp(pattern, global ? 'g' : ''), function(match, group) {
                return replacement;
            });
        } catch (e) {
            console.error("error in string.replace", e);
            return (string || '');
        }
    }
});