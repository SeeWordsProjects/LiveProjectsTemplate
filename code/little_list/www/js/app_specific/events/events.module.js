(function() {
	'use strict';

	angular
		.module('eventsjs', [
		])
        .config(function($stateProvider) {
			$stateProvider
				.state('events_list', {
					cache: false,
					url: '/events_list',
					templateUrl: 'js/app_specific/events/events.list.html',
                    controller: 'eventsListCtrl as vm'
                })
                .state('events_update', {
					cache: false,
					url: '/events_update',
					templateUrl: 'js/app_specific/events/events.update.html',
                    controller: 'eventsUpdateCtrl as vm'
                })
                .state('events_detail', {
					cache: false,
					url: '/events_detail',
                    templateUrl: 'js/app_specific/events/events.detail.html',
                    params: {'selected': 0 },
                    controller: 'eventsDetailCtrl as vm'
				})
				.state('events_test',{
					cache: false,
					url: '/events_test',
					templateUrl: 'js/app_specific/events/events.test.html',
					controller: 'eventsTestCtrl as vm'
				})
				.state('intro',{
					cache: false,
					url: '/intro',
					templateUrl: 'js/app_specific/events/intro.html',
					controller: 'introCtrl as vm'
				})
            });
				
})();