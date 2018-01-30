var app = angular.module('playground');

app.service('teamService', [function () {
    var service = {};
    service.newTeam = function (invitations, teamName, creator) {
        var newTeam = {
            id: 0,
            creator: creator,
            selected: true,
            name: teamName,
            members: [{userId: null, name: creator, email: null}]
        };
        for (i in invitations) {
            var placeholderName = invitations[i].data.slice(0, invitations[i].data.indexOf('@'));
            newTeam.members.push({
                userId: null,
                name: placeholderName,
                email: invitations[i].data
            })
        }
        return newTeam;
    };
    return service;
}]);