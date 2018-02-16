/**
 * Created by mishal23 on 16/7/17.
 */
var app=angular.module('app',[]);

app.controller('AppCtrl',['$scope','$http',function ($scope,$http) {

    $scope.add = true;
    $scope.action = "Add team";

    var refresh = function () {
        $scope.action = "Add team";
        $scope.add = true;
        $http.get('/scores').then(function (response) {
            var scorelist = response.data;
            $scope.scorelist = scorelist;
        });
    };

    refresh();

    $scope.addscore = function () {
        $scope.score.time = (parseInt($scope.score.etime[0]) ||0) + (parseInt($scope.score.etime[1])||0) + (parseInt($scope.score.etime[2])||0);
        $scope.score.score = (parseInt($scope.score.escore[0])||0) + (parseInt($scope.score.escore[1])||0) + (parseInt($scope.score.escore[2])||0);

        $http.post('/scores',$scope.score).then(function (response) {
            $scope.score = {};
            refresh();
        });
    };

    $scope.delete = function (id) {
        $http.delete('/scores/' + id).then(function (response) {
            refresh();
        });
    };

    $scope.edit = function (id) {
        $scope.add = false;
        $scope.action = "Update";
        $http.get('/scores/' + id).then(function (response) {

            $scope.score = response.data;
        });
    };

    $scope.update = function (id) {


        $scope.score.time = (parseInt($scope.score.etime[0]) ||0) + (parseInt($scope.score.etime[1])||0) + (parseInt($scope.score.etime[2])||0);
        $scope.score.score = (parseInt($scope.score.escore[0])||0) + (parseInt($scope.score.escore[1])||0) + (parseInt($scope.score.escore[2])||0);
        $scope.add = false;

        $http.put('/scores/' + id,$scope.score).then(function (response) {
            refresh();
            $scope.score={};
        });
    };

    $scope.clear = function () {
        $scope.score = {};
    }
}]);