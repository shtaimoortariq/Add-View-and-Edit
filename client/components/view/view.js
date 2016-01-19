/**
 * Created by Taimoor on 6/30/2015.
 */

(function () {

    angular.module("myApp")
        .controller('ViewController', ['$state', '$location', '$firebaseArray', ViewController]);

    function ViewController($state, $location, $firebaseArray) {
        var _self = this;
        var ref = new Firebase("https://saveadata.firebaseio.com/saveadata/data");

        this.binding = [];
        this.binding = $firebaseArray(ref);

        this.removeAdata = function () {
            ref.remove();

        };

        this.edit = function (id) {

            $location.path('edit/' + id);

        }
    }

})();