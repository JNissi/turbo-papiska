angular
	.module(
		'tp.tracks',
		[
			'ui.router'
		]
	)
	.config(function($stateProvider) {
		$stateProvider
			.state('tracks', {
				url: '/tracks',
				templateUrl: 'client/app/tracks/list.ng.html',
				controller: 'TracksListController'
			})
	})
	.controller('TracksListController', function($meteor, $scope) {
		$scope.tracks = $meteor.collection(Tracks);

		$scope.play = function(track) {
			$meteor.call('playTrack', track);
		};

		$scope.queue = function(track) {
			$meteor.call('queueTrack', track);
		}
	})
;
