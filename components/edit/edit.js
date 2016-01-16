/**
 * Created by Taimoor on 7/3/2015.
 */



var app = angular.module('app.edit', ['firebase'])
    .controller('EditController', function ($firebaseArray, $routeParams) {
        var _self = this;
        this.UserID = $routeParams.id;
        console.log(this.UserID);
        this.obj = {};

        // _self.name= "ASDSADSAD";


        var ref = new Firebase("https://saveadata.firebaseio.com/saveadata/data/" +$routeParams.id);
 /*       this.binding = $firebaseObject(ref);
        console.log(this.binding);*/
        ref.on("value", function(snapshot) {
           _self.obj = snapshot.val();
            console.log(_self.obj);
        });


     /*   angular.forEach(_self.binding, function (val, index) {
            if (_self.binding.$id == _self.Id) {
                console.log("asdsadsad")

                _self.name = _self.binding.name;
                _self.email = _self.binding.email;
                _self.phone = _self.binding.phone;
                _self.address = _self.binding.address;
                console.log(_self.binding);
            }
        })
*/

    });