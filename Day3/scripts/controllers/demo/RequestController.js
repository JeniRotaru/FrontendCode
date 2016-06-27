hrApp.controller('RequestController', ['$scope', '$http', function($scope, $http){

    $scope.jobList = [];

//    TODO #10 - make AJAX call
    $http({url:"http://hrapp-zth.rhcloud.com/hrapp/jobs", method:"GET"})
        .success(function(data, status, headers, config) {
            $scope.jobList = data;
        })
        .error (function(data, status, headers, config){
            alert("Error: " + status);
        });

}]);
