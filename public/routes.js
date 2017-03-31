app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/semantic.html',
            controller: 'ProgramCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/profile.html',
            controller: 'ProfileCtrl'
        })
        .when('/appointments', {
            templateUrl: '/partials/appointments.html',
            controller: 'AppointmentsCtrl'
        })
        .when('/login', {
            templateUrl: '/partials/login.html',
            // controller: 'LoginCtrl'
        })
        .when('/:id', {
            templateUrl: '/partials/programDetails.html',
            controller: 'ProgramDetailCtrl'
        });
}]);
