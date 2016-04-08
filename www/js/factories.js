angular.module('athl3tics.factories', [])
  .factory('userWorkoutService', function() {
  var uerworkouts = {}
  function set(data) {
    savedData = data;
  }
  function get() {
    return savedData;
  }

  return {
    set: set,
    get: get
  }
})
