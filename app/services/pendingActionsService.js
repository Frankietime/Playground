'use-strict';

var app = angular.module('playground');

app.service('pendingActionsService', ['$filter', function ($filter) {
    var service = {};

    var pendingActionsTypes = [
        {
            actionName: 'setInitialBeat',
            action: 'popup',
            when: 'init',
            header: 'Let\'s cool one!',
            notification: 'We are ready to go! Select the initial beat ;)'
        }
    ];
    
    service.getBoardPendingActions = function (board) {
        var boardPendingActions = [];

        if (board.state == 'initial' && board.initialBeat === undefined || board.initialBeat === null || !board.initialBeat) {
            boardPendingActions.push($filter('filter')(pendingActionsTypes, { actionName: 'setInitialBeat' }, true));
            return boardPendingActions;
        } else {
            return null;
        }        
    };

    return service;
}]);