angular.module('service.detail.router', []).config(_serviceDetailRoute)

function _serviceDetailRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('services.detail', {
			url: '/:serviceId',
			data : { 
				pageTitle: 'Chi tiết dịch vụ' 
			},
			views: {
				"@": {
					controller: 'ServiceDetailController',
					templateUrl: '/views/service.detail.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
