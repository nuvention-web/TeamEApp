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
        .when('/:id', {
            templateUrl: '/partials/programDetails.html',
            controller: 'ProgramDetailCtrl'
        });
}]);
