angular.module('athl3tics.services', [])

.service('UserWorkoutService', function($q) {
  return {
    userWorkouts: [{
      title: '3 Split',
      id: 1,
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
      id: 2,
      workoutImg: 'http://www.uebungen.ws/wp-content/uploads/2011/09/Unterarm-Curls-vor-dem-Körper1.jpg'
    }, {
      title: 'Kraftausdauer Teil 2',
      id: 3,
      workoutImg: 'http://www.uebungen.ws/wp-content/uploads/2011/09/Hammercurls.jpg'
    }, {
      title: '7 Minuten Training',
      id: 4,
      workoutImg: 'http://www.uebungen.ws/wp-content/uploads/2011/09/Seitheben-an-der-Flachbank.jpg'
    }, {
      title: 'Workout Zuhause',
      id: 5,
      workoutImg: 'http://www.uebungen.ws/wp-content/uploads/2011/09/Criss-Cross.jpg'
    }],
    getWorkoutList: function() {
      return this.userWorkouts
    },
    getWorkoutSingle: function(workoutID) {
      var deferred = $q.defer();
      //this.userWorkouts.forEach(function(workoutSingle) {
        //if (workoutSingle.id == workoutID) {
          console.log(workoutID)
          deferred.resolve(this.userWorkouts[workoutID])
        //}
      //});

      return deferred.promise
    },
    addWorkout: function(workout) {
      this.userWorkouts.push(workout);
    },
    deleteWorkout: function(workout) {
      this.userWorkouts.splice(this.userWorkouts.indexOf(workout), 1);
    },
    addWorkoutSession: function(workoutID, sessionObject) {
      var tmpWorkoutList = this.userWorkouts;

      // var session = {
      //   workoutSessionName: sessionObject
      // };

      this.userWorkouts.forEach(function(workoutSingle) {
        if (workoutSingle.id == workoutID) {
          if (!workoutSingle.workoutSessions)
            workoutSingle.workoutSessions = [];
          workoutSingle.workoutSessions.push(sessionObject);
        }
      });

      this.userWorkouts = tmpWorkoutList;

      console.log(this.userWorkouts);
    },
    deleteSession: function(workoutID, sessionName) {
      var tmpWorkoutList = this.userWorkouts;
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
    getExerciseList: function(workoutID, workoutSession) {
      var tempWorkouts = this.userWorkouts;
      var ExerciseList = [];
      tempWorkouts.forEach(function(workout) {
        if (workout.id = workoutID) {
          if (workout.workoutSessions) {
            workout.workoutSessions.forEach(function(session) {
              if (session.workoutSessionName == workoutSession) {
                ExerciseList = session.workoutExerciseList;
              }
            })
          }
        }
      })
      return ExerciseList;
    },
    addNewExercise: function(workoutID, workoutSessionName, ExerciseObject) {
      var tempWorkouts = this.userWorkouts;
      tempWorkouts.forEach(function(workout) {
        if (workoutID == workout.id) {
          if (workout.workoutSessions) {
            workout.workoutSessions.forEach(function(session) {
              if (session.workoutSessionName == workoutSessionName) {
                if (!session.workoutExerciseList) {
                  session.workoutExerciseList = [];
                }
                session.workoutExerciseList.push(ExerciseObject)
              }
            })
          }
        }
      })
    }
  }

})
