/**
 * Created by Taimoor tariq on 1/19/2016.
 */

(function () {

    angular.module("myApp", ['ui.router', 'ngMaterial', 'firebase', 'ngMdIcons'])
        .controller("AppController", ['$state', AppController])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('orange');
        });

    function AppController($state) {

        this.goToView = function () {
            $state.go('view')
        };


        this.goToAdd = function () {
            $state.go('add')
        };

    }


})();