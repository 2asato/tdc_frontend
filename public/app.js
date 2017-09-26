console.log("play ball");

const app = angular.module('p5', []);

app.controller('mainController', ['$http', function($http) {
    this.message = 'controller works'


$http({
  method: 'GET',
  url: 'http://localhost:3000/teams',
}).then(response => console.log(response))
  .catch(err => console.log(err));
}]);
