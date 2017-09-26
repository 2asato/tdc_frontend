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


// teams
$http({
  method: 'GET',
  url: this.url + '/teams',
}).then(function(response) {
  console.log(response)
  this.teams = response.data;
}.bind(this))

// players
$http({
  method: 'GET',
  url: this.url + '/players',
}).then(function(response) {
  console.log(response)
  this.players = response.data;
}.bind(this))

}]);
