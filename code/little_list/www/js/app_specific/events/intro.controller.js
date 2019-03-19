(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('introCtrl', control);
    
    control.$inject=[
        '$state'
    ];

    function control(
        $state
    ){
        var vm = angular.extend(this,{});

        vm.enter = function(){
            $state.go('events_test');
        }
    }

})();