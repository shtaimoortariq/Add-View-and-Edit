/**
 * Created by Taimoor on 7/3/2015.
 */

var counter = 0;

var app = angular.module('app.edit', ['firebase'])
    .controller('EditController', function ($firebaseObject, $routeParams) {
        if (!counter) {
            this.Id = $routeParams.id;
            counter++;

        }

        var ref = new Firebase("https://saveadata.firebaseio.com/saveadata/data/" + this.Id);
        this.binding = {};
        var $scope = this;

        this.binding = $firebaseObject(ref);

        this.binding.$loaded()
            .then(function () {
                angular.forEach($scope.binding, function () {
                    if ($scope.binding.$id == $scope.Id) {
                        console.log("Done");
                        $scope.name = $scope.binding.name;
                        $scope.email = $scope.binding.email;
                        $scope.phone = $scope.binding.phone;
                        $scope.address = $scope.binding.address;
                    }
                })
            });


    });