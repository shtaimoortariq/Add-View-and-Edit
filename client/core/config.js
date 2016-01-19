/**
 * Created by Taimoor tariq on 1/19/2016.
 */


(function () {
    angular.module("myApp")
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider


                .state("add", {
                    url: '/add',
                    templateUrl: 'components/add/add.html',
                    controller: 'AddController',
                    controllerAs: 'add'


                })

                .state("view", {
                    url: "/view",
                    templateUrl: "components/view/view.html",
                    controller: "ViewController",
                    controllerAs: "view"

                })
                .state("edit", {
                    url: "/edit/:id",
                    templateUrl: "components/edit/edit.html",
                    controller: "EditController",
                    controllerAs: "edit"


                });


            $urlRouterProvider.otherwise('/add')

        })

})();