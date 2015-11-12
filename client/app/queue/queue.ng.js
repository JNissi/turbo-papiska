angular
	.module(
		'tp.queue',
		[
			'ui.router'
		]
	)
	.config(function($stateProvider) {
		$stateProvider
			.state('queue', {
				url: '/queue',
				templateUrl: 'client/app/queue/list.ng.html',
				controller: 'QueueController'
			});
	})
	.controller('QueueController', function($meteor, $scope) {
		$scope.queue = $meteor.collection(Queue);
	})
;
