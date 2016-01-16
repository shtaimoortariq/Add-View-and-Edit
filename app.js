/**
 * Created by Taimoor on 6/30/2015.
 */


var app = angular.module('app', ['ngNewRouter', 'ngMdIcons', 'app.view', 'app.edit', 'ngMaterial']);
app.controller('AppController', ['$router', '$location', AppController]);

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');
});

AppController.$routeConfig = [

    {
        path: '/view',
        component: 'view'
    },
    {
        path: '/',
        component: 'add'
    },
    {
        path: '/edit/:id',
        component: 'edit'
    }

];


function AppController($router, $location, $rootScope) {


    this.goToView = function () {

        $location.path('/view');
    };


    this.goToAdd = function () {
        $location.path('/');
    };


}


