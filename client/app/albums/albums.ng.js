angular
	.module('tp.albums',[
		'ui.router'
	])
	.config(function($stateProvider) {
		$stateProvider
			.state('albums', {
				url: '/albums',
				templateUrl: 'client/app/albums/list.ng.html',
				controller: 'AlbumsListController'
			})
	})
	.controller('AlbumsListController', function($meteor, $scope) {
		$scope.albums = $meteor.collection(Albums);
	})
;
