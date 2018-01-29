app = angular.module('playground');

app.controller('homeController',[ '$scope', '$uibModal', function ($scope, $uibModal) {
	$scope.modalUrl = 'board-creation-modal';
	$scope.showModal = false;
	$scope.columnsPluralLabel = 'Columns';
	$scope.columnsSingularLabel = 'Column';
	$scope.invitationsPluralLabel = 'E-mails';
	$scope.invitationsSingularLabel = 'Team Member E-mail';
	$scope.modalTabsId = 'modal-tabs';
	$scope.columns = [];
	$scope.invitationEmails = [];

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
			controller: 'modalInstanceController'
			//appendTo: angular.element(document).find('#newBoardModal')
		});
		//$scope.showModal = true;
	};
	var closeModal = function () {
		$scope.showModal = false;
	};
	$scope.createBoard = function () {

		closeModal();
	};
	$scope.cancelBoardModal = function () {
		closeModal();
	}
	
}]);