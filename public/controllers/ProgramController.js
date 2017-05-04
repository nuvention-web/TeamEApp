app.controller('ProgramCtrl', ['$scope', 'Programs', 'CurrentUser', function($scope, Programs, CurrentUser) {

    $scope.user = CurrentUser.get(function(data) {
        $scope.user = data.local;
    });


    $scope.programs = Programs.query();

    $scope.$on('LastRepeaterElement', function() {
        $('.special.cards .image').dimmer({
            on: 'hover'
        });

        $('.shape').shape({ width: '30%' });

        $('.flip-over').on('click', function() {
            $(this).closest('.shape').shape('flip over');
        });
    });

    $scope.search = "";
    $scope.userInput = "";

    $scope.count = 0;
    $scope.applySearch = function() {
        $scope.search = $scope.userInput;
    };

    $scope.applySearchEnter = function(e) {
        if (e.keyCode === 13) {
            $scope.search = $scope.userInput;
        }
    };

    $scope.clearing = function() {
        $scope.userInput = "";
        $scope.search = "";
    };

}]);
