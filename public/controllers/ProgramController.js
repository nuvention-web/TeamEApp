app.controller('ProgramCtrl', ['$scope', 'Programs', 'CurrentUser', function($scope, Programs, CurrentUser) {

    $scope.user = CurrentUser.get(function(data) {
        $scope.user = data.local;
    });
    $scope.ranked_programs = [];
    Programs.query().$promise.then(function(result) {
        $scope.unordered_programs = result;
        angular.forEach($scope.unordered_programs, function(program) {
            var dst = {};
            var r = {};
            if (program.school.indexOf($scope.user.school) > -1)
                r.rank = 1;
            else
                r.rank = -1;

            angular.merge(dst, program, r);
            this.push(dst);
        }, $scope.ranked_programs);

    });

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
