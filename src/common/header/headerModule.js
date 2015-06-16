import angular from 'angular';
import headerTpl from 'common/header/header.tpl';

let headerModule = angular.module('header', [headerTpl.name]);

headerModule.config(($stateProvider) => {

});

export default headerModule;
