app.controller('ProfileCtrl', ['$scope', 'CurrentUser', 'Programs', function($scope, CurrentUser, Programs) {

	$scope.user = CurrentUser.get(function(data) {
		$scope.user = data.local;
	});

	$scope.programs = [];
    Programs.query().$promise.then(function(result) {
        $scope.unordered_programs = result;
        angular.forEach($scope.unordered_programs, function(program) {
            if (program.school.indexOf($scope.user.school) > -1)
                this.push(program);
        }, $scope.programs);

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
