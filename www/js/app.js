// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('athl3tics', [
  'ionic',
  'ionic.utils',
  'ionMDRipple',
  'athl3tics.factories',
  'athl3tics.services',
  'athl3tics.filters',
  'athl3tics.controllers'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.workoutList', {
    url: "/workout/workoutList",
    views: {
      'menuContent': {
        templateUrl: "templates/workout/workoutList.html",
        controller: 'WorkoutListCtrl'
      }
    },
    resolve: {
      workoutList: function(UserWorkoutService) {
        return UserWorkoutService.getWorkoutList()
      }
    }
  })

  .state('app.workoutSessionList', {
    url: "/workout/workoutSessionList/:workoutID",
    views: {
      'menuContent': {
        templateUrl: "templates/workout/workoutSessionList.html",
        controller: 'WorkoutSessionList'
      }
    },
    resolve: {
      workoutSessionList: function($stateParams, UserWorkoutService) {
        console.log($stateParams.workoutIndex);
        //return UserWorkoutService.getWorkoutSingle($stateParams.index)
      }
    }
  })

  .state('app.workoutSessionSingle',{
    url:'/workout/WorkoutSessionSingleCtrl/:workoutID?sessionName',
    views: {
      'menuContent': {
        templateUrl: "templates/workout/workoutSessionSingle.html",
        controller: 'WorkoutSessionSingleCtrl'
      }
    },
    resolve: {
      exerciseList : function($stateParams,UserWorkoutService) {
        return UserWorkoutService.getExerciseList($stateParams.workoutID,$stateParams.sessionName)
      }
    }
  })

  // .state('app.workout-new', {
  //   url: "/workout/workout-new",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/workout/workout-single.html",
  //       controller: 'WorkoutSingleCtrl'
  //     }
  //   },
  //   resolve: {
  //     workoutSingle: function($stateParams, UserWorkoutService) {
  //       return UserWorkoutService.getWorkoutSingle($stateParams.workoutID)
  //     }
  //   }
  // })

  $urlRouterProvider.otherwise('app/workout/workoutList');
})
