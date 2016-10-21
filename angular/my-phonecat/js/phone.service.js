var services = angular.module('phonecatServicesModule', ['ngResource']);

services.factory('Phone', PhoneService);

PhoneService.$inject = ['$resource']
function PhoneService($resource) {
    return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {
                    phoneId: 'phones'
                },
                isArray: true
            }
    });
}
