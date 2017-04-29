app.controller('ProgramCtrl', ['$scope', 'Programs', 'CurrentUser', '$routeParams', 'Programs', function($scope, Programs, CurrentUser, $routeParams, Programs) {
    CurrentUser.get(function(data) {
        $scope.user = data.local;
    });

    $scope.program = Programs[$routeParams.id];

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

    $scope.search = "";
    $scope.userInput = "";

    $scope.count=0;
    $scope.applySearch = function() {
        $scope.search = $scope.userInput;
    };

    $scope.applySearchEnter = function(e) {
        if(e.keyCode === 13){
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