app.factory('Programs', ['$resource', function($resource) {
    return $resource('/programs/:id', null, {
        'update': { method: 'PUT' }
    });
}]);
