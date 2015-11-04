angular
	.module('tp.artists', [
		'ui.router'
	])
	.config(function($stateProvider) {
		$stateProvider
			.state('artists', {
				url: '/artists',
				templateUrl: 'client/app/artists/list.ng.html',
				controller: 'ArtistListController'
			});
	})
	.controller('ArtistListController', function($meteor, $scope) {
		console.log("artistlist");
		$scope.artists = $meteor.collection(Artists);
	});
