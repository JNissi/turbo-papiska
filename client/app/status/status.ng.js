angular
	.module(
		'tp.status',
		[

		])
	.controller('StatusController', function($meteor, $scope) {
		$scope.status = $meteor.object(Status, {});

		$scope.playToggle = function() {
			$meteor.call('playToggle');
		};
	})
;
