app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/partials/programs.html',
			controller: 'ProgramCtrl'
		})
		.when('/#/profile', {
			templateUrl: '../views/profile.ejs',
		})
		.when('/#/appointments', {
			templateUrl: '/partials/appointments.html',
			// controller: 'AppointmentsCtrl'
		})
		.when('/#/:id', {
			templateUrl: '/partials/programDetails.html',
			controller: 'ProgramDetailCtrl'
		});
}]);
