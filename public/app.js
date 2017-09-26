console.log("play ball");

const app = angular.module('p5', []);

app.controller('mainController', ['$http', function($http) {
    this.message = 'controller works'
}]);
