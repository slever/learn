var controller = angular.module('phoneListControllerModule', []);
controller.controller('PhoneListCtrl', PhoneListCtrl);
PhoneListCtrl.$inject = ['Phone'];
function PhoneListCtrl(Phone) {
    var vm = this;
    vm.orderProp = 'name';
    vm.phones =Phone.query();
}
