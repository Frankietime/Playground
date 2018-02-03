'use-strict';

app = angular.module('playground');

app.controller('homeController',[ '$scope', '$uibModal', '$document', '$log', function ($scope, $uibModal, $document, $log) {
	$scope.modalUrl = 'board-creation-modal';
	$scope.showModal = false;
	$scope.createNewTeam = true;
	$scope.boardEmpty = true;

	$scope.openModal = function () {
		var modalInstance = $uibModal.open({
			animation: true,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: '../templates/board-creation-modal.html',
			size: 'lg',
			controller: 'newBoardModalController',
			appendTo: angular.element($document[0].querySelector('#newBoardModal'))
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		  }, function () {
			$log.info('Modal dismissed at: ' + new Date());
		  });
		};	
}]);