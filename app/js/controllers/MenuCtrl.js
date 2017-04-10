dubbelApp.controller('MenuCtrl', function($scope, $location) {
	

    // to know which tab is active
    $scope.isActive = function (viewLocation) { 
        if (viewLocation === $location.path()) {
        	return "active";
        }
        else {
        	return "";
        }
    };
});