'use-strict';

var app = angular.module('playground');

app.directive('boardItems',[ function (){
	return {
		restrict: 'A',
		scope: {
			items: '=',
			itemsPluralLabel: '@',
			itemsSingularLabel: '@',
			description: '@',
			form: '=',
			type: "@"
		},
		templateUrl: '../templates/board-items.html',
		link: function (scope, element, attrs) {
			if (!scope.type) {
				scope.type = 'text';
			}
			var nextItemId = 0;
			scope.addNewItem = function () {
				scope.items.push({
					id: nextItemId,
					data: '',
					items: []
				});
				nextItemId++;
			};
			scope.deleteItem = function (item) {
				element.find('#item_' + item.id).css('display', 'none');
				if (~scope.items.indexOf(item)) {
					scope.items.splice(scope.items.indexOf(item),1);
				} else {
					throw 'item not in items object';
				}
			};
		}
	};
}]);