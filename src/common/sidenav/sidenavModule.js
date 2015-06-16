import angular from 'angular';
import sidenavTpl from 'common/sidenav/sidenav.tpl';

let sidenavModule = angular.module('sidenav', [sidenavTpl.name]);

export default sidenavModule;