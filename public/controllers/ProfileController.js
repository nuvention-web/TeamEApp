app.controller('ProfileCtrl', ['$scope', 'CurrentUser', 'Programs', function($scope, CurrentUser, Programs) {

	CurrentUser.get(function(data) {
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
	
}]);
