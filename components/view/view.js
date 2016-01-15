/**
 * Created by Taimoor on 6/30/2015.
 */

var app=angular.module('app.view',['ngNewRouter','ngMaterial','firebase'])
    .controller('ViewController', function ($firebaseArray, $location) {
        var ref = new Firebase("https://saveadata.firebaseio.com/saveadata/data");
        this.binding = [];
        this.binding = $firebaseArray(ref);


        this.removeAdata = function () {
            ref.remove();

        };

        this.edit = function(id){

        $location.path('/edit/'+id);


        };
    });
