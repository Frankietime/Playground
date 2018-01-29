var app = angular.module('playground');

app.controller('modalInstanceController',['$uibModalInstance', '$scope', function ($uibModalInstance, $scope){
    $scope.columnsPluralLabel = 'Columns';
	$scope.columnsSingularLabel = 'Column';
	$scope.invitationsPluralLabel = 'E-mails';
	$scope.invitationsSingularLabel = 'Team Member E-mail';
	$scope.modalTabsId = 'modal-tabs';
	$scope.columns = [];
    $scope.invitationEmails = [];
    $scope.accordionOneAtATime = true;
    $scope.userTeams = [
		{
			id: 1,
			name: 'Kickass Team',
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
			id: 2,
			name: 'Cool Team',
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