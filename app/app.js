(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute',
        ])
        .config(config);


    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'app/home/home.view.html',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(false);
    }




})();