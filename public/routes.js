app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/programs.html',
            controller: 'ProgramController'
        })

    .when('/:id', {
        templateUrl: '/programDetails.html',
        controller: 'ProgramDetailCtrl'
    });
}]);
