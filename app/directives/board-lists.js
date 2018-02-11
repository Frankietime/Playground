'use-strict';

var app = angular.module('playground');

app.directive('boardLists', ['cardsService', function (cardsService) {
    return {
        restrict: 'A',
        scope: {
            lists: '=',
            members: '=',
            lastId: '='
        },
        templateUrl: '../templates/board-lists.html',
        link: function (scope) {
            // TODO: asignar ids a todas las cards y lastId = ultino nro de iteracion sobre todas las cards
            scope.addNewItem = function (column) {
                var newItem = {data: '', title: '', editing: true};
                cardsService.setId(newItem);
                column.items.push(newItem);
                
            };
            scope.assignItemToMember = function (item, member) {
                if(!member.itemsAssigned) {
                    member.itemsAssigned = [];
                    member.itemsAssigned.push(item);
                } else if(member.itemsAssigned.indexOf(item) == -1) {
                        member.itemsAssigned.push(item);
                } else {
                    member.itemsAssigned.splice(member.itemsAssigned.indexOf(item));
                }
            };
        }
    };
}]);