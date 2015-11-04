angular.module('turbo-papiska', [
	'angular-meteor',
	'ui.router',
	'tp.artists',
	'tp.albums',
	'tp.tracks'
])
	.config(function($locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/artists');
	})
	.filter('time', function() {
		return function(input) {
			var out = '';
			input = +input || 0;

			out += ('0' + ((input / 60) | 0)).slice(-2) + ':';
			out += ('0' + (((input % 60)) | 0)).slice(-2);

			return out;
		};
	})
;
