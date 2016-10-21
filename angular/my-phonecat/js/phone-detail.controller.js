var controller = angular.module('phoneDetailControllerModule', []);
controller.controller('PhoneDetailCtrl', PhoneDetailCtrl);

PhoneDetailCtrl.$inject = ['$routeParams','Phone'];
function PhoneDetailCtrl($routeParams,Phone) {
    var vm = this;
    vm.imageURL;

    Phone.get({phoneId: $routeParams.phoneId},function(data){
      vm.phone = data;
      vm.imageURL = data.images[0];
    });

    // $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
    //   vm.phone = data;
    //   vm.imageURL = data.images[0];
    // });

    vm.setImage = function(url){
      console.log("toto");
      vm.imageURL=url;
    }
}
