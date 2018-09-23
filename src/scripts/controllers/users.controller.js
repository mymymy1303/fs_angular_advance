angular.module('users.controller', []).controller("UsersController", _usersController)



function _usersController($scope, $http, $filter, UsersService) {
	$scope.title = 'List of users'

	//Current displaying page. Bind to enter page number textbox
	$scope.currentPage = 1

	//Max numbers displaying on the center of the range between the first page and last page.
	$scope.maxSize = 3

	//Bind with search textbox, displaying any result matches the entered value.
	$scope.searchInput = ""

	//Options for selecting number of items display on page.
	$scope.pageSizeArray = [5, 10, 15, 20, 25]

	//Bind with items per page listbox.
	$scope.pageSize = $scope.pageSizeArray[1]

	//Send get request to get all users listed in database.
	UsersService.get($http)
		.then(response => {
			$scope.data = response.data

			//Calculated the number of pages.
			let temp = $scope.data.length / $scope.pageSize
			$scope.numPages = (temp === parseInt(temp)) ? temp : Math.floor(temp) + 1
		})
		.catch(err => console.log(err))

}