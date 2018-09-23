angular.module('users.controller', []).controller("UsersController", _usersController).filter('UsersPagination', _usersFilter);



function _usersController($scope, $http, UsersService) {
	$scope.title = 'List of users'
	$scope.currentPage = 1
	$scope.pageSize = 10
	$scope.maxSize = 7

	UsersService.get(
		$http,
		response => {
			$scope.data = response.data
			$scope.numPages = $scope.data.length / $scope.pageSize
		},
		console.log("Đã có lỗi xảy ra")
	)
}

function _usersFilter() {
	return (data, start) => {
		if (!data || !data.length) {
			return;
		}
		return data.slice(start)
	}
}
