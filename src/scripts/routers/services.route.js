angular.module('services.router', []).config(_servicesRoute)

function _servicesRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('services', {
			url: '/services',
			data : { 
				pageTitle: 'Dịch vụ' 
			},
			views: {
				"@": {
					controller: 'ServicesController',
					templateUrl: '/views/services.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
