hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService', 'JobActionService', function ($scope, EmployeeActionsService, JobActionService) {
    /*
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];
    */

    $scope.employeeActionList = EmployeeActionsService;
    $scope.jobActionList = JobActionService;
    $scope.currentDate = new Date();
}]);
