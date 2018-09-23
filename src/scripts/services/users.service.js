angular.module('users.service', []).service('UsersService', _usersServices)

function _usersServices() {
	let baseUrl = 'http://localhost:5050/users'

	this.get = function($http) {
		return $http.get(baseUrl)
	}
}