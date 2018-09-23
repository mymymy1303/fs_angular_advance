angular.module('users.controller', []).controller("UsersController", _usersController).filter('UsersPagination', _usersFilter);



function _usersController($scope, $http, $filter, UsersService) {
	$scope.title = 'List of users'
	$scope.currentPage = 1
	$scope.pageSize = 10
	$scope.maxSize = 3
	$scope.searchInput = ""
	$scope.pagesNum = 0

	UsersService.get($http)
		.then(response => {
			$scope.data = response.data
			let temp = $scope.data.length / $scope.pageSize
			$scope.numPages = (temp === parseInt(temp)) ? temp : Math.floor(temp) + 1
		})
		.catch(err => console.log(err))

}

function _usersFilter() {
	return (data, start) => {
		if (!data || !data.length) {
			return;
		}
		return data.slice(start)
	}
}
