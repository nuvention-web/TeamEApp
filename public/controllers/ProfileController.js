app.controller('ProfileCtrl', ['$scope', 'User', function ($scope) {
	$scope.user = User();
}]);