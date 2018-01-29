var app = angular.module('playground');

app.directive('selectTeam',['$document', '$filter', function ($document, $filter) {
    return {
        restrict: 'A',
        scope: {
            teams: '='
        },
        templateUrl: 'select-team',
        link: function (scope, element, attrs) {
            scope.selectTeam = function (team, event) {
                
                angular.element($document[0].querySelectorAll('.modal-teams')).removeClass('playground-selected-item');
                // select current team and unselect every other team
                angular.forEach(scope.teams, function (t, key){
                    if (t.id == team.id && t.selected == false) {
                        t.selected = true;
                        angular.element($document[0].querySelectorAll('#team_'+ t.id)).addClass('playground-selected-item');
                    } else {
                        t.selected = false;
                    }
                });
                // var radio = angular.element(element[0].querySelector('#team_' + team.id + '_radio'));
                // if (radio.attr('checked')) {                                       
                //     radio.attr('checked', false);
                // } else {                                                    
                    
                //     var radioButtons = angular.element($document[0].querySelectorAll('.team-radio-button'));
                //     angular.forEach(radioButtons, function (rb, key) {
                //         angular.element(rb).attr('checked',false);
                //     });
                //     radio.attr('checked', true);
                // }
            };
        }
    };    
}]);