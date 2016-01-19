/**
 * Created by Taimoor on 7/3/2015.
 */


(function () {

    angular.module("myApp")
        .controller("EditController", ['$state', '$stateParams', EditController]);
    function EditController($state,$stateParams) {
        var _self = this;

        this.UserID = $stateParams.id;

        var ref = new Firebase("https://saveadata.firebaseio.com/saveadata/data/" + $stateParams.id);

        console.log(this.UserID);

        this.arr = [];

        ref.on("value", function (snapshot) {
            _self.arr     = snapshot.val();
            _self.phone   = _self.arr.phone;
            _self.name    = _self.arr.name;
            _self.email   = _self.arr.email;
            _self.address = _self.arr.address;
        });

        this.submit = function () {

            ref.update({
                name    : _self.name,
                email   : _self.email,
                phone   : _self.phone,
                address : _self.address


            });
            _self.phone   = "";
            _self.name    = "";
            _self.email   = "";
            _self.address = "";
            $state.go('view')
        }


    }

})();