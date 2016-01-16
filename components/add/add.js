/**
 * Created by Taimoor on 6/30/2015.
 */

var app = angular.module('app')
    .controller('AddController', function ($location){
        var ref = new Firebase("https://saveadata.firebaseio.com/saveadata/data");
        var myRef = new Firebase("https://saveadata.firebaseio.com/saveadata/mydata");

        this.submit = function(){

            ref.child(this.name).set({
                name: this.name,
                email: this.email,
                phone: this.phone,
                address: this.address


            });


            myRef.child(this.name).set({
                name: this.name,
                email: this.email,
                phone: this.phone,
                address: this.address


            });


                this.name = "";
                this.email=  "";
                this.phone = "";
                this.address = "";
                $location.path('/view')
        };



    });




