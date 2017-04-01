app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/programs', {
			templateUrl: '/partials/programs.html',
			controller: 'ProgramCtrl'
		})
		.when('/profile', {
			templateUrl: '/partials/profile.html',
			controller: 'AuthCtrl'
		})
		.when('/appointments', {
			templateUrl: '/partials/appointments.html',
			// controller: 'AppointmentsCtrl'
		})
		.when('/', {
			templateUrl: '/partials/login.html',
			controller: 'AuthCtrl'
		})
		.when('/login', {
			templateUrl: '/partials/login.html',
			controller: 'AuthCtrl'
		})
		.when('/signup', {
			templateUrl: '/partials/signup.html',
			controller: 'AuthCtrl'
		})
		.when('/logout', {
			templateUrl: '/partials/login.html',
			controller: 'LogoutCtrl'
		})
		.when('/:id', {
			templateUrl: '/partials/programDetails.html',
			controller: 'ProgramDetailCtrl'
		})
		.when('/user', {
			templateUrl: '/partials/userinfo.html',
			controller: 'AuthCtrl'
		})
		.otherwise({
			redirectTo: '/signup'
		});
}]);
