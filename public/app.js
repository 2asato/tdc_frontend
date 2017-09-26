console.log("play ball");

const app = angular.module('p5', []);

app.controller('mainController', ['$http', function($http) {
    let controller = this;

this.message = "controller works";
this.url = 'https://thediamondclub-api.herokuapp.com'
this.team = {};
this.teams = [];
this.player = {};
this.players = [];
this.teamPlayers = [];
this.formdata = {};
this.teamformdata = {};
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
     console.log('Formdata: ', this.teamformdata);
  $http({
    method: 'POST',
    url: this.url + '/teams',
    data: this.teamformdata
  }).then(function(response){
    console.log("this.formdata", this.teamformdata);
   //  this.formdata = response.data
   this.teamformdata = response.data
    console.log("response.data", response.data);
    $http({
      method: 'GET',
      url: this.url + '/teams',
    }).then(function(response) {
      console.log(response);
      this.teams = response.data;
    }.bind(this));
    console.log(response);
  }.bind(this)
  , function(err){
    console.log(err);
  })
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

// this.processForm = function() {
//    console.log('processForm function . . .');
//    console.log('Formdata: ', this.formdata);
//   //  this.formdata.first_name = "a"
// $http({
//   method: 'POST',
//   url: this.url + '/players',
//   data: this.formdata
// }).then(function(response){
//   console.log("this.formdata", this.formdata);
//  //  this.formdata = response.data
//  this.formdata = response.data
//   console.log("response.data", response.data);
//   $http({
//     method: 'GET',
//     url: this.url + '/players',
//   }).then(function(response) {
//     console.log(response);
//     this.players = response.data;
//   }.bind(this));
//   console.log(response);
// }.bind(this)
// , function(err){
//   console.log(err);
// })
// }

//
this.processForm = function(player){
  this.player = player;
  this.data.id = id;
    $http({
      method: 'POST',
      url: this.url + '/teams/' + id + '/players',
      data: { first_name: this.player.first_name,   last_name: this.player.last_name  },
    }).then(function(res){
      console.log('create player: ', res);
      controller.player = res.data;
    })
  }




}]);
