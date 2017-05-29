app.controller('ProfileCtrl', ['$scope', 'CurrentUser', 'Programs', function($scope, CurrentUser, Programs) {

	$scope.user = CurrentUser.get(function(data) {
		$scope.user = data.local;
	});

	$scope.programs = [];
    // Programs.query().$promise.then(function(result) {
    //     $scope.unordered_programs = result;
    //     angular.forEach($scope.unordered_programs, function(program) {
    //         var dst = {};
    //         var r = {};
    //         if (program.school.indexOf($scope.user.school) > -1)
    //             if (program.subjects.index($scope.user.major) > -1)

    //         if (program.school.indexOf($scope.user.school) > -1)
    //             r.rank = 0;
    //         else 
    //         else
    //             r.rank = -1;

    //         angular.merge(dst, program, r);
    //         this.push(dst);
    //     }, $scope.programs);
    //     console.log($scope.programs);

    // });

    Programs.query().$promise.then(function(result) {
        $scope.unordered_programs = result;
        angular.forEach($scope.unordered_programs, function(program) {
            var dst = {};
            var r = {};
            if (program.school.indexOf($scope.user.school) > -1) {
                if (program.subjects.indexOf($scope.user.major) > -1)
                    r.rank = 1;
                else
                    r.rank = 0;
                
            }
            else
                r.rank = -1;

            angular.merge(dst, program, r);
            this.push(dst);
        }, $scope.programs);
        console.log($scope.programs);
    });
	$scope.index = 0;
	$scope.$on('LastRepeaterElement', function() {

        $(document).ready(function(){
            $.each($scope.programs, function(index) {
                $('.ui.modal#dialogTestDialog' + String(index))
                .modal('attach events', '.showmodal.button.' + String(index), 'show');
            
            });
            
            $('.ui.accordion').accordion();
        });
    });
	
}]);
