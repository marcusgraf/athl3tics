angular.module('athl3tics.services', [])

.service('UserWorkoutService', function($q) {
   var userWorkouts = [{
      title: '3 Split',
      workoutImg: 'http://www.uebungen.ws/wp-content/uploads/2011/09/Unterarm-Curls-mit-der-Langhantel-Untergriff.jpg',
      workoutSessions: [{
        workoutSessionName: 'Montag',
        workoutSessionColor: "#000000",
        workoutIcon: "icon-monday",
        workoutExerciseList: [{
          exerciseName: "Pull Ups",
          exerciseSets: [20, 12, 8]
        }, {
          exerciseName: "Push Ups",
          exerciseSets: [1, 2, 8]
        }]
      }, {
        workoutSessionName: 'Mittwoch',
        workoutSessionColor: "#FFFFFF",
        workoutIcon: "icon-wednesday",
        workoutExerciseList: [{
          exerciseName: "Trizep",
          exerciseSets: [20, 12, 8]
        }, {
          exerciseName: "Xyz",
          exerciseSets: [1, 2, 8]
        }]
      }]
    }, {
      title: 'Kraftausdauer Teil 1',
      workoutImg: 'http://www.uebungen.ws/wp-content/uploads/2011/09/Unterarm-Curls-vor-dem-Körper1.jpg'
    }, {
      title: 'Kraftausdauer Teil 2',
      workoutImg: 'http://www.uebungen.ws/wp-content/uploads/2011/09/Hammercurls.jpg'
    }, {
      title: '7 Minuten Training',
      workoutImg: 'http://www.uebungen.ws/wp-content/uploads/2011/09/Seitheben-an-der-Flachbank.jpg'
    }, {
      title: 'Workout Zuhause',
      workoutImg: 'http://www.uebungen.ws/wp-content/uploads/2011/09/Criss-Cross.jpg'
  }];

  return {
    getWorkoutList: function() {
      return userWorkouts
    },
    getWorkoutSessionList: function(workoutID) {
      var deferred = $q.defer();
      deferred.resolve(userWorkouts[workoutID]);
      return deferred.promise;
    },
    addWorkout: function(workout) {
      userWorkouts.push(workout);
    },
    deleteWorkout: function(workout) {
      userWorkouts.splice(userWorkouts.indexOf(workout), 1);
    },
    addWorkoutSession: function(workoutID, sessionObject) {
      var tmpWorkoutList = this.userWorkouts;

      // var session = {
      //   workoutSessionName: sessionObject
      // };

      userWorkouts.forEach(function(workoutSingle) {
        if (workoutSingle.id == workoutID) {
          if (!workoutSingle.workoutSessions)
            workoutSingle.workoutSessions = [];
          workoutSingle.workoutSessions.push(sessionObject);
        }
      });

      userWorkouts = tmpWorkoutList;

      console.log(userWorkouts);
    },
    deleteSession: function(workoutID, sessionName) {
      var tmpWorkoutList = userWorkouts;
      for (var i = 0; i < tmpWorkoutList.length; i++) {
        if (tmpWorkoutList[i].id == workoutID) {
          if (tmpWorkoutList[i].workoutSessions) {
            for (var j = 0; j < tmpWorkoutList[i].workoutSessions.length; j++) {
              if (tmpWorkoutList[i].workoutSessions[j].workoutSessionName == sessionName) {
                tmpWorkoutList[i].workoutSessions.splice(j, 1)
                break;
              }
            }
          }
        }
      }
    },
    getExerciseList: function(workoutID, sessionID) {
      var deferred = $q.defer();
      deferred.resolve(userWorkouts[workoutID].workoutSessions[sessionID]);
      return deferred.promise;
    },
    addNewExercise: function(workoutID, sessionID, exerciseID) {
      var exerciseObject = {
        exerciseID: "Trizep",
        exerciseSets: [20, 12, 8]
      };

      userWorkouts[workoutID].workoutSessions[sessionID].workoutExerciseList.push(exerciseObject);
    }
  }
})

.service('ExerciseService', function($q) {
  var exerciseList = [{
    id: 1,
    title: 'Push Ups',
    exerciseImg: 'http://www.uebungen.ws/wp-content/uploads/2011/09/Unterarm-Curls-vor-dem-Körper1.jpg'
  }, {
    id: 2,
    title: 'Benchpress',
    exerciseImg: 'http://www.uebungen.ws/wp-content/uploads/2011/09/Unterarm-Curls-vor-dem-Körper1.jpg'
  }];

  return {
    getExerciseList: function(){
      var deferred = $q.defer();
      deferred.resolve(exerciseList);
      return deferred.promise;
    }
  }
})
