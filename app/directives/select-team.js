var app = angular.module('playground');

app.directive('selectTeam',['$document', '$filter', function ($document, $filter) {
    return {
        restrict: 'A',
        scope: {
            teams: '='
        },
        templateUrl: '../templates/select-team.html',
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
            };
        }
    };    
}]);