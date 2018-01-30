app = angular.module('playground');

app.controller('homeController',[ '$scope', '$uibModal', '$document', function ($scope, $uibModal, $document) {
	$scope.modalUrl = 'board-creation-modal';
	$scope.showModal = false;


	$scope.createNewTeam = true;
	$scope.openModal = function () {
		var modalInstance = $uibModal.open({
			animation: true,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			keyboard: true,
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