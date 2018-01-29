var app = angular.module('playground');

app.controller('modalInstanceController',['$uibModalInstance', '$scope', function ($uibModalInstance, $scope){
    $scope.columnsPluralLabel = 'Columns';
	$scope.columnsSingularLabel = 'Column';
	$scope.invitationsPluralLabel = 'E-mails';
	$scope.invitationsSingularLabel = 'Team Member E-mail';
	$scope.modalTabsId = 'modal-tabs';
	$scope.columns = [];
	$scope.invitationEmails = [];
    
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