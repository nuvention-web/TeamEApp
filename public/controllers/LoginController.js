app.controller('LoginCtrl', function($scope, $rootScope, $http, $location) {
	// This object will be filled by the form
	$scope.user = {};

	// Register the login() function
	$scope.login = function() {
		$http.post('/login', {
				username: $scope.user.username,
				password: $scope.user.password,
			})
			.success(function(user) {
				// No error: authentication OK
				$rootScope.message = 'Authentication successful!';
				$location.url('/programs');
			})
			.error(function() {
				// Error: authentication failed
				$rootScope.message = 'Authentication failed.';
				$location.url('/');
			});
	};
});

app.controller('AdminCtrl', function($scope, $http) {
	// List of users got from the server
	$scope.users = [];

	// Fill the array to display it in the page
	$http.get('/users').success(function(users) {
		for (var i in users)
			$scope.users.push(users[i]);
	});
});
