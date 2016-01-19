/**
 * Created by Taimoor on 6/30/2015.
 */



(function () {

    angular.module("myApp")
        .controller("AddController", ['$state', AddController]);

    function AddController($state) {
        var _self = this;

        var ref = new Firebase("https://saveadata.firebaseio.com/saveadata/data");
        var myRef = new Firebase("https://saveadata.firebaseio.com/saveadata/mydata");

        this.name    = "";
        this.email   = "";
        this.phone   = "";
        this.address = "";

        this.submit = function () {

            ref.child(this.name).set({
                name      : this.name,
                email     : this.email,
                phone     : this.phone,
                address   : this.address


            });


            myRef.child(this.name).set({
                name    : this.name,
                email   : this.email,
                phone   : this.phone,
                address : this.address


            });


            _self.name    = "";
            _self.email   = "";
            _self.phone   = "";
            _self.address = "";

            $state.go('view');
        };


    }

})();