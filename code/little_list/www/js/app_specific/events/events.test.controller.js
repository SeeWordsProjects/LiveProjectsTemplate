(function () {
    'use strict';

    angular
        .module('eventsjs')
        .controller('eventsTestCtrl', control);
    
    control.$inject=[
        '$state',
        '$scope'
    ];

    function control($state,$scope){
        var vm = angular.extend(this,{
            recognizedText: '',
            buttonState: 'Record',
            loading: false
        });

        var recognition = new SpeechRecognition(); // To Device
        var listening;
        // Set the language of the recognition
        recognition.lang = 'en-US';
        recognition.onend = function(){
            vm.loading = false;
            $scope.$apply();
            console.log("onend!");
        };
        recognition.onresult = function(event) {
            console.log("onresult.triggered!");
            if (event.results.length > 0) {
                console.log("message received!");
                vm.recognizedText = event.results[0][0].transcript;   
            }
        };
        // Reset function
        function reset() {
            listening = false;
            vm.buttonState = 'Record';
            vm.loading = false;
           // $scope.$apply();
        }

        // stt function that executes when the button is pressed
        vm.sttToggle = function(){
            if(listening) {
                // Stop recording
                recognition.stop();
                reset();
                console.log("Recording session stop..."); 
            } else {
                // Start recording
                recognition.start();
                listening = true;
                vm.buttonState = 'Done';
                vm.loading = true;
                console.log("Recording...");
            }
            console.log(listening);
        }
    }

})();