app.controller('ProgramCtrl', ['$scope', 'Programs', 'CurrentUser', '$routeParams', 'Programs', function($scope, Programs, CurrentUser, $routeParams, Programs) {
    $scope.user = CurrentUser.get(function(data) {
        $scope.user = data.local;
    });

    $scope.program = Programs[$routeParams.id];

    $scope.programs = Programs.query();

    $scope.loadAddToCalendar = function() {
        addtocalendar.load();
    }; 

    $scope.editing = [];

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

    $scope.index = 0;

    $scope.$on('LastRepeaterElement', function() {
        $(document).ready(function(){
            $.each($scope.ranked_programs, function(index) {
                $('.ui.modal#dialogTestDialog' + String(index))
                .modal('attach events', '.showmodal.button.' + String(index), 'show');
            
            });
            $('.ui.accordion').accordion();
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

    $scope.major = function() {
        return $scope.user.major;
    };

    $scope.school = function() {
        return $scope.user.school;
    };

    $scope.graduation = function() {
        return $scope.user.graduation;
    };

    $scope.trackInfo = function(prog) {
        getInfo(prog.program)
    };

}]);
