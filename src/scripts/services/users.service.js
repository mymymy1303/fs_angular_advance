angular.module('users.service', ['ngResource'])
	.factory('UsersService', ($resource) => {
		return $resource("http://localhost:5050/users", true)
	})