/**
 * Created by user on 6/28/2016.
 */
hrApp.controller('FormsController', ['$scope', function($scope) {
    $scope.submit = function() {
        if ($scope.form.$valid) {
            alert("The form is submitted with valid data!");
        }
    }
}]);