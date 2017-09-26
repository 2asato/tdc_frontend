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

}]);
