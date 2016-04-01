var app = angular.module('starter');

app.controller('homeCtrl', function($scope, $http) {
    console.log('home Controller');
    $scope.user = {}
    $scope.save = function() {
        console.log($scope.user)
        $http.post("/api/login", { data: $scope.user })
            .success(function(response) {
                console.log(response);
            })
            .error(function(error) {
                console.log(error );
            })
    }

})
