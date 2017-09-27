console.log("play ball");

const app = angular.module('p5', []);

app.controller('mainController', ['$http', function($http) {
    let controller = this;

this.message = "controller works";
this.url = 'https://thediamondclub-api.herokuapp.com'
// this.url = 'http://localhost:3000'
this.team = {};
this.teams = [];
this.player = {};
this.players = [];
this.teamPlayers = [];
this.formdata = {};
this.teamformdata = {};
this.alumnis = [];
this.showMain = true;
this.showTeams = false;
this.showTeamPage = false;
this.showPlayers = false;
this.showPlayerPage = false;
this.showLogin = false;
this.showRegister = false;
this.showEdit = false;
this.showEditTeam = false;
this.showRegisterTeam = false;
this.showContact = false;
this.showAlumni = false;

// show/hide
// home
this.goHome = function() {
  this.showMain = true;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
  this.showRegisterTeam = false;
  this.showContact = false;
  this.showAlumni = false;
}

// teams
this.goTeams = function() {
  this.getTeamsData();
  this.showMain = false;
  this.showTeams = true;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
  this.showRegisterTeam = false;
  this.showContact = false;
  this.showAlumni = false;
}

// team profile
this.goTeamPage = function() {
  this.getTeamsData();
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = true;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
  this.showRegisterTeam = false;
  this.showContact = false;
  this.showAlumni = false;
}

// player
this.goPlayers = function() {
  this.getPlayersData();
  this.getTeamsData();
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = true;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
  this.showRegisterTeam = false;
  this.showContact = false;
  this.showAlumni = false;
}

// player profile
this.goPlayerPage = function() {
  this.getPlayersData();
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = true;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
  this.showRegisterTeam = false;
  this.showContact = false;
  this.showAlumni = false;
}

this.goEdit = function() {
  this.getPlayersData();
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = true;
  this.showEditTeam = false;
  this.showRegisterTeam = false;
  this.showContact = false;
  this.showAlumni = false;
}

this.goEditTeam = function() {
  this.getTeamsData();
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = true;
  this.showRegisterTeam = false;
  this.showContact = false;
  this.showAlumni = false;
}

// register player
this.goRegister = function() {
  this.getTeamsData();
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = true;
  this.showEdit = false;
  this.showEditTeam = false;
  this.showRegisterTeam = false;
  this.showContact = false;
  this.showAlumni = false;
}

// register team
this.goRegisterTeam = function() {
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
  this.showRegisterTeam = true;
  this.showContact = false;
  this.showAlumni = false;
}

// contact
this.goContact = function() {
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
  this.showRegisterTeam = false;
  this.showContact = true;
  this.showAlumni = false;
}

// alumni
this.goAlumni = function() {
  this.getAlumni();
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
  this.showRegisterTeam = false;
  this.showContact = false;
  this.showAlumni = true;
}



// teams
this.getTeamsData = function() {
$http({
  method: 'GET',
  url: this.url + '/teams',
}).then(function(response) {
  console.log(response)
  this.teams = response.data;
}.bind(this))
}

// teams/id
  this.getTeam = function(team_id){
    console.log(team_id);
  $http({
    method: 'GET',
    url: this.url + '/teams/' + team_id,
  }).then(function(response) {
    console.log(response);
    controller.team = response.data;
  }.bind(this));
  this.goTeamPage();
}

// edit team
this.editTeam = function(updatedTeam) {
  console.log(updatedTeam);
  $http({
    method: 'PUT',
    url: this.url + '/teams/' + this.team.id,
    data: {
      team:updatedTeam
    }
  }).then(function(response) {
    console.log(response);
    controller.team = {};
  }, function(err) {
    console.log(err);
  })
  this.getTeamsData();
  this.goTeams();
}


// delete team
  this.deleteTeam = function(team_id) {
    console.log(team_id)
    $http({
      method: 'DELETE',
      url: this.url + '/teams/' + team_id
    }).then(function(response){
      console.log(response);
      controller.team = response.data;
    }, function(err){
      console.log(err);
    })
    this.getTeamsData();
    controller.goTeams();
  }

// register team
  this.processForm2 = function() {
     console.log('processForm function . . .');
     console.log('Team Formdata: ', this.teamformdata);
     $http({
       method: 'POST',
       url: this.url + '/teams/',
       data: this.teamformdata
     }).then(function(result) {
       console.log('Data from server: ',result);
     });
     this.getTeamsData();
     controller.goTeams();
}



// players
this.getPlayersData = function() {
$http({
  method: 'GET',
  url: this.url + '/players',
}).then(function(response) {
  console.log(response)
  this.players = response.data;
}.bind(this))
}

// player/id
  this.getPlayer = function(player_id){
    console.log(player_id);
  $http({
    method: 'GET',
    url: this.url + '/players/' + player_id,
  }).then(function(response) {
    console.log(response);
    controller.player = response.data;
  }.bind(this));
  this.goPlayerPage();
}

// edit player
this.editPlayer = function(updatedPlayer) {
  console.log(updatedPlayer);
  $http({
    method: 'PUT',
    url: this.url + '/players/' + this.player.id,
    data: {
      player:updatedPlayer
    }
  }).then(function(response) {
    console.log(response);
    controller.player = {};
  }, function(err) {
    console.log(err);
  })
  this.getPlayersData();
  this.goPlayers();
}

// delete player
this.deletePlayer = function(player_id) {
  console.log(player_id)
  $http({
    method: 'DELETE',
    url: this.url + '/players/' + player_id
  }).then(function(response){
    console.log(response);
    controller.player = response.data;
  }, function(err){
    console.log(err);
  })
  this.getPlayersData();
  this.goPlayers();
}

// register player
  this.processForm = function() {
     console.log('processForm function . . .');
     console.log('Formdata: ', this.formdata);
     $http({
       method: 'POST',
       url: this.url + '/players/',
       data: this.formdata
     }).then(function(result) {
       console.log('Data from server: ',result);
     });
     this.getPlayersData();
     controller.goPlayers();
}

// alumni
this.getAlumni = function() {
$http({
  method: 'GET',
  url: this.url + '/alumnis',
}).then(function(response) {
  console.log(response)
  this.alumnis= response.data;
}.bind(this))
}








}]);
