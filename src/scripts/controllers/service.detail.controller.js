angular.module('service.detail.controller', []).controller("ServiceDetailController", _serviceDetailController)

function _serviceDetailController($scope, $http, $stateParams) {
	$http({
		method: 'GET',
		url: '/db/services.json'
	}).then(function (response) {
		$scope.data = eval(response.data.services[$stateParams.serviceId - 1]);
	}, function (error) {
		console.log('Lỗi 005 - Service Detail: ' + error);
	});
}
