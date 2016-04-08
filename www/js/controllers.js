angular.module('athl3tics.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
  console.log("AppCtrl");
  // Form data for the registration modal

  /*var url = "http://athl3tics.de/api-exercise-v1/"

  var credentials = btoa('test' + ':' + 'test');
  var authorization = {
    'Authorization': 'Basic ' + credentials
  };
  var header = {
    headers: authorization
  }

  $http.get(url, header, {
      cache: 'true'
    })
    .then(function(response) {
      console.log(response);

      //console.log(JSON.parse(workouts));
      //var jsonObj = JSON.parse(workouts);
      //console.log(jsonObj);
    });
    */
})

.controller('WorkoutListCtrl', function($scope, $ionicPopup, workoutList, UserWorkoutService) {

  $scope.workoutList = workoutList;

  $scope.creatNewUserWorkout = function() {
    $scope.newWorkout = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="newWorkout.workoutName">',
      title: 'Workout Name',
      subTitle: 'Gib einen Namen für dein Workout ein',
      scope: $scope,
      buttons: [{
        text: 'Abbrechen'
      }, {
        text: '<b>Erstellen</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.newWorkout.workoutName) {
            //don't allow the user to close unless he enters something
            e.preventDefault();
          } else {
            var workoutTitle = $scope.newWorkout.workoutName;
            var nowDate = new Date;
            var currentTimestamp = nowDate.getTime();

            var newWorkout = {
              title: workoutTitle,
              id: 'username.' + workoutTitle + '.' + currentTimestamp
            };

            UserWorkoutService.addWorkout(newWorkout);
          }
        }
      }]
    });
  }

  $scope.deleteUserWorkout = function(workoutID) {
    UserWorkoutService.deleteWorkout(workoutID);
  }


})

.controller('WorkoutSessionList', function($scope, workoutSingle, UserWorkoutService, $ionicModal, $stateParams) {
  $scope.workoutSingle = workoutSingle;
  $scope.sessionObject = {};

  $scope.workoutID = $stateParams.workoutID;

  $ionicModal.fromTemplateUrl('./templates/workout/addWorkoutSessionModal.html', {
    scope: $scope,
    animation: 'slide-in-up',
    backdropClickToClose: true
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.deleteUserSession = function(sessionName){
    UserWorkoutService.deleteSession($scope.workoutID,sessionName)
  };

  $scope.creatNewUserWorkout = function() {
    $scope.modal.show();

    // console.log("abcxyz");
  };

  $scope.creatNewWorkoutSession = function() {

    if ($scope.sessionObject.workoutSessionName) {
      UserWorkoutService.addWorkoutSession($scope.workoutID, $scope.sessionObject);
      $scope.modal.hide();
      $scope.sessionObject = {};
    }

  }
})

.controller('WorkoutSessionSingleCtrl', function($scope, $stateParams, exerciseList, UserWorkoutService) {
  $scope.exerciseList = exerciseList;
  console.log($scope.exerciseList);

  $scope.addExercise = function() {
    console.log();
  };
});
