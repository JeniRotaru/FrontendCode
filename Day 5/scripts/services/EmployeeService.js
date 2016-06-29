hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactoryBackup.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            },
            findDepartments: function() {
                return $http({url: CommonResourcesFactoryBackup.findAllDepartmentsUrl, method: 'GET'})
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "departmentId": -10
                        };
                    });
            },
            findManagers: function() {
                return $http({url: CommonResourcesFactoryBackup.findAllEmployeesUrl, method: 'GET'})
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "firstName": " ",
                            "lastName": " "
                        };
                    });
            },
            findJobs: function() {
                return $http({url: CommonResourcesFactoryBackup.findAllJobsUrl, method: 'GET'})
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "jobId": -20
                        };
                    });
            },
            findDepartments_1: function() {
                return $http({url: CommonResourcesFactoryBackup.findAllDepartmentsUrl, method: 'GET'})
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "departmentId": -100
                        };
                    });
            },
            findManagers_1: function() {
                return $http({url: CommonResourcesFactoryBackup.findAllEmployeesUrl, method: 'GET'})
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "firstName": "_",
                            "lastName": "_"
                        };
                    });
            },
            findJobs_1: function() {
                return $http({url: CommonResourcesFactoryBackup.findAllJobsUrl, method: 'GET'})
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "jobId": -200
                        };
                    });
            },
            findById_1: function (employeeId) {
                return $http({url: CommonResourcesFactoryBackup.findOneEmployeeUrl + employeeId, method: 'GET'})
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": -100,
                            "firstName": " ",
                            "lastName": " ",
                            "email": " ",
                            "phoneNumber": "000.000.0000",
                            "hireDate": "-",
                            "jobId": -1,
                            "salary": 0,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": -150
                        };
                    });
            }
        }
    }]
);