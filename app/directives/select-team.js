var app = angular.module('playground');

app.directive('selectTeam',['$document', function ($document) {
    return {
        restrict: 'A',
        templateUrl: 'select-team',
        link: function (scope, element, attrs) {
            scope.selectTeam = function (teamId) {
                var radio = angular.element(element[0].querySelector('#team_' + teamId + '_radio'));
                if (radio.attr('checked')) {
                    radio.attr('checked', false);
                } else {
                    // uncheck every other radiobutton
                    var radioButtons = angular.element($document[0].querySelectorAll('.team-radio-button'));
                    angular.forEach(radioButtons, function (rb, key) {
                        angular.element(rb).attr('checked',false);
                    });
                    radio.attr('checked', true);
                }
            };
        }
    };    
}]);