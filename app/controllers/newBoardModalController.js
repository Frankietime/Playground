'use-strict';

var app = angular.module('playground');

app.controller('newBoardModalController',['$uibModalInstance', '$scope', '$log', '$filter', '$location', 'boardService', 'teamService',
	function ($uibModalInstance, $scope, $log, $filter, $location, boardService, teamService){
	var user = 'myself';
	$scope.newBoard = { name: '' };
	$scope.newTeamView = { name: '', bool: true };
	$scope.columnsPluralLabel = 'Columns';
	$scope.columnsSingularLabel = 'Column';
	$scope.invitationsPluralLabel = 'E-mails';
	$scope.invitationsSingularLabel = 'E-mail';
	$scope.modalTabsId = 'modal-tabs';
	$scope.columns = [
		{ cantDelete: true, placeholder:'Start your tasks here...', items: [] },
		{ cantDelete: true, placeholder: $scope.columns && $scope.columns.length >= 1 ? '..step ' + $scope.columns.length : '...and move them here when completed', items: [] }
	];
    $scope.invitationEmails = [];
    
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
		var team = $scope.newTeamView.bool ? teamService.newTeam($scope.invitationEmails, $scope.newTeamView.name, user) : $filter('filter')($scope.userTeams, { selected: true}, true)[0];
			
		var data = {
			boardName: $scope.newBoard.name,
			creator: user,
			state: 'initial',
			columns: $scope.columns,
			team: team
		};
		var params = {};
		boardService.publishNewBoard(data, params).then(function(res) {
			console.log('New board created succesfully. ' + res.message);
			$uibModalInstance.close();
			$location.url('/board');
		}, function (er) {
			console.log(er);
		});
	};
	$scope.cancelBoardModal = function () {
		$uibModalInstance.dismiss('Cancel');
    };
    $scope.createNewTeamView = function () {
        $scope.newTeamView.bool = true;
        
    };
    $scope.selectTeamView = function () {
        $scope.newTeamView.bool = false;
	};
}]);