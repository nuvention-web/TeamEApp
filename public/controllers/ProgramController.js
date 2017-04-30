app.controller('ProgramCtrl', ['$scope', 'Programs', 'CurrentUser', function($scope, Programs, CurrentUser) {
    $scope.nonmatches = Programs;
    
    $scope.programs = Programs.query(function() {
        var match = [];

        angular.forEach($scope.nonmatches, function(program) {
            var keepgoing = true;

            angular.forEach(program.school, function(s) {
                if (keepgoing) {
                    if (s == $scope.user.school) {
                        match.push(program);
                        $scope.nonmatches.pop(program);
                        keepgoing=false;
                    }
                }
            });
        });
        
        return match;
    });
    
    
    console.log($scope.programs);
    // $scope.programs = $scope.matches;

    CurrentUser.get(function(data) {
        $scope.user = data.local;
    });

    $scope.editing = [];

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
