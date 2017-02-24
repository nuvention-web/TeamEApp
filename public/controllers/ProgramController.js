app.controller('ProgramController', ['$scope', 'Programs', function($scope, Programs) {
    $scope.programs = Programs.query();
    $scope.editing = [];

}]);