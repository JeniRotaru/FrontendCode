myModule.controller('MainController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.someName="name";
    console.log($scope.someName);
}]);