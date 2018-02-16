'use-strict';

var app = angular.module('playground');

app.controller('boardModalController', ['$scope', '$uibModalInstance', 'header', 'notification', function ($scope, $uibModalInstance, header, notification) {
    $scope.header = header;
    $scope.notification = notification;
}]);