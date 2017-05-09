app.controller('ProfileCtrl', ['$scope', 'CurrentUser', 'Programs', function($scope, CurrentUser, Programs) {

	$scope.user = CurrentUser.get(function(data) {
		$scope.user = data.local;
	});

	$scope.programs = Programs.query();
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
