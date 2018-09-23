angular.module('services.controller', []).controller("ServicesController", _servicesController)

function _servicesController($scope, $http) {
	$http({
		method: 'GET',
		url: '/db/services.json'
	}).then(function (response) {
		$scope.data = eval(response.data.services);
	}, function (error) {
		console.log('Lỗi 004 - Services: ' + error);
	});
}
