app.controller('ProgramCtrl', ['$scope', 'Programs', function($scope, Programs) {
    $scope.programs = Programs.query();
    $scope.editing = [];

    $scope.$on('LastRepeaterElement', function() {
        $('.special.cards .image').dimmer({
            on: 'hover'
        });

        $('.flip-over').on('click',function() {
            $(this).closest('.shape').shape('flip over');
        });
    });
}]);
