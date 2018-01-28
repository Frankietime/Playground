var app = angular.module('playground');

app.directive('boardCreationModal',[ function () {
    return {
        restrict: 'A',
        templateUrl: 'board-creation-modal'
    };
}]);