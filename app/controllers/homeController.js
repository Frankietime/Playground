app = angular.module('playground');

app.controller('homeController',[ '$scope', '$uibModal', '$document', function ($scope, $uibModal, $document) {
	$scope.modalUrl = 'board-creation-modal';
	$scope.showModal = false;
	

	$scope.userTeams = [
		{
			team_id: 1,
			team_name: 'Kickass Team',
			members: [
				{
					userId: 23,
					name: 'Duke Ellington'
				},
				{
					userId: 70,
					name: 'Elvin Jones'
				},
				{
					userId: 14,
					name: 'George Adams'
				}
			]	
		},
		{
			team_id: 2,
			team_name: 'Cool Team',
			members: [
				{
					userId: 23,
					name: 'Jim Hall'
				},
				{
					userId: 70,
					name: 'Paul Desmond'
				},
				{
					userId: 14,
					name: 'Scott Lafaro'
				}
			]	
		}		
	];

	$scope.createNewTeam = true;
	$scope.openModal = function () {
		var modalInstance = $uibModal.open({
			animation: true,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'board-creation-modal',
			size: 'lg',
			controller: 'modalInstanceController',
			controllerAs: '$scope',
			appendTo: angular.element($document[0].querySelector('#newBoardModal'))
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		  }, function () {
			$log.info('Modal dismissed at: ' + new Date());
		  });
		};	
}]);