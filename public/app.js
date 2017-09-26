console.log("play ball");

const app = angular.module('p5', []);

app.controller('mainController', ['$http', function($http) {
    let controller = this;

this.message = "controller works";
this.url = 'http://localhost:3000'
this.team = {};
this.teams = [];
this.player = {};
this.players = [];
this.teamPlayers = [];
this.formdata = {};
this.showMain = true;
this.showTeams = false;
this.showTeamPage = false;
this.showPlayers = false;
this.showPlayerPage = false;
this.showLogin = false;
this.showRegister = false;
this.showEdit = false;
this.showEditTeam = false;

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
}

// teams
this.goTeams = function() {
  this.showMain = false;
  this.showTeams = true;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
}

// team profile
this.goTeamPage = function() {
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = true;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
}

// player
this.goPlayers = function() {
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = true;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
}

// player profile
this.goPlayerPage = function() {
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = true;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = false;
}

this.goEdit = function() {
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = true;
  this.showEditTeam = false;
}

this.goEditTeam = function() {
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = false;
  this.showEdit = false;
  this.showEditTeam = true;
}

// register
this.goRegister = function() {
  this.showMain = false;
  this.showTeams = false;
  this.showTeamPage = false;
  this.showPlayers = false;
  this.showPlayerPage = false;
  this.showLogin = false;
  this.showRegister = true;
  this.showEdit = false;
  this.showEditTeam = false;
}

// teams
$http({
  method: 'GET',
  url: this.url + '/teams',
}).then(function(response) {
  console.log(response)
  this.teams = response.data;
}.bind(this))

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
  this.goTeamPage();
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
    controller.goTeams();
  }




// players
$http({
  method: 'GET',
  url: this.url + '/players',
}).then(function(response) {
  console.log(response)
  this.players = response.data;
}.bind(this))

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
  this.goPlayerPage();
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
  this.goPlayers();
}

this.processForm = function() {
   console.log('processForm function . . .');
   console.log('Formdata: ', this.formdata);
$http({
  method: 'POST',
  url: this.url + '/players',
  data: this.formdata
}).then(function(response){
  console.log("this.formdata", this.formdata);
 //  this.formdata = response.data
 this.formdata = response.data
  console.log("response.data", response.data);
  $http({
    method: 'GET',
    url: this.url + '/players',
  }).then(function(response) {
    console.log(response);
    this.players = response.data;
  }.bind(this));
  console.log(response);
}.bind(this)
, function(err){
  console.log(err);
})
}


}]);
