function Appctrl($scope, $http) {

    $http.get('/contactlist').success(function(response) {
        $scope.contactlist = response;
    });

}
