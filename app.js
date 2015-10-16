var app = angular.module('ngMadLibs', ['ngAnimate']);

app.controller('MainCtrl', function($scope, $interval) {
  $scope.name = 'World';
  $scope.madlibWords = 
  {
    job_title: {value: "[ Job Title ]"},
    tedious_task: {value: "[ Tedious Task ]"},
    dirty_task: {value: "[ Dirty Task ]"},
    celebrity: {value: "[ Celebrity ]"},
    useless_skill: {value: "[ Useless Skill ]"},
    adjective: {value: "[ Adjective ]"},
    obnoxious_celeb: {value: "[ Obnoxious Celebrity ]"},
    name: {value: "[ Name ]"},
    huge_no: {value: "[ Huge Number] "}
  };

  //adds default value so we can return to it when the user presses the start over button.
  for (var it in $scope.madlibWords)
    $scope.madlibWords[it].defVal = $scope.madlibWords[it].value;

  $scope.gender = "F";
  //shorter name to reference
  $scope.mw = $scope.madlibWords;
  $scope.errMessage = "";
  $scope.filledIn = false;

  /*
   submitWords -> Validates the words input by the user and ng-show's the madlib page
   */
  $scope.submitWords = function ()
  {

    for (var it in $scope.mw) {
      var item = $scope.mw[it];
      if (item.value == item.defVal || item.value == "") {
        $scope.errMessage = "Not all values entered.";
        return;
      }
    }
    //check the number field individually. In the future when preparing for any sheet, the word objects would also have a type
    //attribute to be checked
      if (isNaN($scope.mw.huge_no.value) == true)
      {
        $scope.errMessage = "Please provide a numerical value for 'Huge Number'";
        $scope.mw.huge_no.value = $scope.mw.huge_no.defVal;
        return;
      }

  $scope.errMessage = "";
    $scope.filledIn = true;
  }
  /*
  startOver -> resets the madLib word sheet and returns to the word view
   */
  $scope.startOver = function ()
  {

    $scope.filledIn = false;
    $scope.wordsForm.$submitted = false;


    $interval(function() {
      for (var it in $scope.mw) {
        $scope.mw[it].value = $scope.mw[it].defVal;

      }
    }, 1000, 0);



  }
});
