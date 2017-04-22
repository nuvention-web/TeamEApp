app.controller('SignupCtrl', function($scope, $rootScope, $http, $location) {
	// This object will be filled by the form
	$scope.user = {};

	// Register the login() function
	$scope.signup = function() {
		$http.post('/signup', {
				username: $scope.user.username,
				password: $scope.user.password,
				firstname: $scope.user.firstname,
				lastname: $scope.user.lastname,
				email: $scope.user.email,
				graduation: $scope.user.graduation,
				birthday: $scope.user.birthday,
				school: $scope.user.school,
				major: $scope.user.major
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
