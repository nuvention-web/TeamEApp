app.factory('Programs', ['$resource', function($resource) {
    return $resource('/api/programs/:id', null, {
        'update': { method: 'PUT' }
    });
}]);

app.factory('User', ['$resource', function($resource) {
    return $resource('/api/users/:id', null, {
        'update': { method: 'PUT' }
    });
}]);
