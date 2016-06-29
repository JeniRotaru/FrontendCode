/**
 * Created by Jeni on 28.06.2016.
 */
hrApp.controller('UserController', ['$scope', '$location', function($scope, $location, UserService){

    $scope.back = function() {
        $location.url('views/main.html');
    };

    $scope.reset = function() {
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.id = '';
        $scope.age = '';
    };

    $scope.saveDetails = function() {
        alert("Saved");
        UserService.add($scope.firstName);
    };
}]);
