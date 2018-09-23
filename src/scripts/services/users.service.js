angular.module('users.service', []).service('UsersService', _usersServices)

//Send GET request, no parameter, to WebAPI server to get all users listed in database.
//Return a Promise, need to be handled wherever it's call.
function _usersServices() {
	let baseUrl = 'http://localhost:5050/users'

	this.get = function($http) {
		return $http.get(baseUrl)
	}
}