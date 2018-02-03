'use-strict';

var app = angular.module('playground');

app.controller('boardController', ['$scope', 'boardService', 'pendingActionsService', '$uibModal', '$log', '$document',
    function ($scope, boardService, pendingActionsService, $uibModal, $log, $document) {

    $scope.board = boardService.getCurrentBoard();
    $scope.board.columns.push({data: 'Add new list...', newList: true});

     var init = function () {
        var boardPendingActions = pendingActionsService.getBoardPendingActions($scope.board);
        if (boardPendingActions) {
            angular.forEach(boardPendingActions, function (pendingAction) {
                if (pendingAction[0].when == 'init' && pendingAction[0].action == 'popup') {
                    $uibModal.open({
                        appendTo: angular.element($document[0].querySelector('#board-view')),
                        ariaDescribedBy: '#popup-text',
                        ariaLabelledBy: '#pop-up-label',
                        controller: 'boardModalController',
                        controllerAs: '$scope',
                        size: 'md',
                        resolve: { 
                            header: function () {
                                return pendingAction[0].header;
                            },
                            notification: function () {
                                return pendingAction[0].notification;
                            }
                        },
                        templateUrl: '../templates/popup.html'
                    }).result.then(function (selectedBeat) {
                        $scope.board.initialBeat = selectedBeat;
                    }, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    })
                }
            });          
        }
    }

    init();

    $scope.playInitialBeat = function (selectedBeat) {
        //create a synth and connect it to the master output (your speakers)
        // var synth = new Tone.Synth().toMaster();
    
        // //play a note every quarter-note
        // var loop = new Tone.Loop(function(time){
        //     synth.triggerAttackRelease("C2", "8n", time);
        // }, "4n");
        // //loop between the first and fourth measures of the Transport's timeline
        // loop.start("1m").stop("32m");
        // Tone.Transport.start();
        // $uibModalInstance.close();
    
        };
}]);