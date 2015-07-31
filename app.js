var app = angular.module('ngMadLibs', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.madlibWords = 
  {
    female_name: {value: "[ Female Name ]"},
    job_title: {value: "[ Job Title ]"},
    tedious_task: {value: "[ Tedious Task ]"},
    dirty_task: {value: "[ Dirty Task ]"},
    celebrity: {value: "[ Celebrity ]"},
    useless_skill: {value: "[ Useless Skill ]"},
    adjective: {value: "[ Adjective ]"},
    obnoxious_celeb: {value: "[ Obnoxious Celebrity ]"},
    huge_no: {value: "[ Huge Number] "}
  }
  //shorter name to reference
  $scope.mw = $scope.madlibWords;
});
