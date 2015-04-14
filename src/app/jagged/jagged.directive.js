'use strict';

// The imgLoadClass directive adds the .invisible bootstrap class to the img element
// then when the element's onload event fires it removes the .invisible and adds
// the class(es) specified to the element, if no classes are supplied the default is 'animated fadeIn'
// usage <img ng-src="{{myImgSrc}}" alt="{{myImgAlt}}" img-load-class="someClass anotherClass">
angular.module('jagged').directive('imgLoadClass', function() {
    return {
        restrict: 'A',
        scope: false,
        link: function($scope, $element, $attrs) {
            var classToAdd = $attrs.imgLoadClass || 'animated fadeIn';
            var el = $element[0];
            el.setAttribute('class', 'invisible');
            el.onload = function() {
                el.removeAttribute('class', 'invisible');
                el.setAttribute('class', classToAdd);
            }
        }
    }
});
