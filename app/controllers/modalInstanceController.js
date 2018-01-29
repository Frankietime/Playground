var app = angular.module('playground');

app.controller('modalInstanceController',['$uibModalInstance', '$scope', function ($uibModalInstance, $scope){
    $scope.columnsPluralLabel = 'Columns';
	$scope.columnsSingularLabel = 'Column';
	$scope.invitationsPluralLabel = 'E-mails';
	$scope.invitationsSingularLabel = 'Team Member E-mail';
	$scope.modalTabsId = 'modal-tabs';
	$scope.columns = [];
    $scope.invitationEmails = [];
    $scope.newTeam = true;
    $scope.userTeams = [
		{
            id: 1,
            selected: false,
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
            selected: false,
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
	$scope.createBoard = function () {

		closeModal();
	};
	$scope.cancelBoardModal = function () {
		$uibModalInstance.dismiss('cancel');
    };
    $scope.createNewTeam = function () {
        $scope.newTeam = true;
        
    };
    $scope.selectTeam = function () {
        $scope.newTeam = false;
    }
}]);