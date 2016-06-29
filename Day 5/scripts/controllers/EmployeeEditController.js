hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        $scope.departments = [];
        $scope.managers = [];
        $scope.jobs = [];
        $scope.employee = [];

        $http({url: CommonResourcesFactoryBackup.findOneEmployeeUrl + $routeParams.employeeId, method: 'GET'})
            .success(function (data) {
                $scope.employee = data;
            })
            .error(function (err) {
                return {
                    "departmentId": -10
                };
            });

        EmployeeService.findDepartments_1()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at employees/findDepartments_1: " + err);
            });
        EmployeeService.findManagers_1()
            .then(function (res) {
                $scope.managers = res.data;
            }, function (err) {
                console.log("Error at employees/findManagers_1: " + err);
            });
        EmployeeService.findJobs_1()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at employees/findJobs_1: " + err);
            });
        
        EmployeeService.findById_1($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findById_1: " + err);
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);