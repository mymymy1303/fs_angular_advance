angular.module('users.controller', []).controller("UsersController", _usersController)



function _usersController($scope, $http, $filter, UsersService) {
	$scope.title = 'List of users'
	$scope.currentPage = 1
	$scope.maxSize = 3
	$scope.searchInput = ""
	$scope.pagesNum = 0
	$scope.pageSizeArray = [5, 10, 15, 20, 25]
	$scope.pageSize = $scope.pageSizeArray[1]

	UsersService.get($http)
		.then(response => {
			$scope.data = response.data
			let temp = $scope.data.length / $scope.pageSize
			$scope.numPages = (temp === parseInt(temp)) ? temp : Math.floor(temp) + 1
		})
		.catch(err => console.log(err))

}