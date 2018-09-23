angular.module('users.router', []).config(_usersRoute)

function _usersRoute($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
	$stateProvider
		.state('users', {
			url: '/',
			data : { 
				pageTitle: 'Users' 
			},
			views: {
				"@": {
					controller: 'UsersController',
					templateUrl: '/views/users.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
	$urlRouterProvider.otherwise('/');
	$urlMatcherFactoryProvider.caseInsensitive(true);
}
