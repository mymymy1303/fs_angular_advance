angular.module('users.controller', []).controller("UsersController", _usersController).filter('UsersPagination', _usersFilter);



function _usersController($scope, $http) {
	$scope.title = 'List of users'
	$scope.currentPage = 1
	$scope.pageSize = 10
	$scope.maxSize = 7

	$http({
			method: 'GET',
			url: 'http://localhost:5050/users',
			crossDomain: true
		})
		.then(response => {
			$scope.data = response.data

			$scope.numPages = $scope.data.length / $scope.pageSize
		})
		.catch(err => {
			console.log(err)
		})
}

function _usersFilter() {
	return (data, start) => {
		if (!data || !data.length) {
			return;
		}
		return data.slice(start)
	}
}
