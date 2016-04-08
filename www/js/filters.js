angular.module('athl3tics.filters', [])

.filter('range', function() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=min; i<max; i++)
      input.push(i);
    return input;
  };
})

.filter('getById', function() {
  return function(input, id) {
    var i=0, len=input.length;
    for (; i<len; i++) {
      if (+input[i].id == +id) {
        return input[i];
      }
    }
    return null;
  }
})

  .value('muscleGroups', [
    {label : 'Chest'},
    {label : 'Shoulders'},
    {label : 'Back'},
    {label : 'Biceps'},
    {label : 'Triceps'},
    {label : 'Legs'},
    {label : 'Abs'}
  ])

  .value('workouts', {
    'Chest' : [
      {
        images: ['img/workout-icon.jpg'],
        label : 'Barbell Flat Bench Press'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Barbell Incline Bench Press'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Dumbbell Flat Bench Press'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Dumbbell Incline Bench Press'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Decline Dumbbell Bench Press'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Flat Bench Dumbbell Fly'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Incline Dumbbell Fly'
      },
      {
        images: ['img/decline-dumbbell-flyes.png'],
        label : 'Decline Dumbbell Fly'
      },
      {
        images: ['img/cable-crossover.png'],
        label : 'Cable Crossovers'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Dumbbell Pullover'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Parallel Bar Dip'
      }
    ],
    'Shoulders' : [
      {
        images: ['img/workout-icon.jpg'],
        label : 'Seated Dumbbell Press'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Front Raises'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Lateral Raises'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Reverse Flyes'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Single Arm Lateral Raise With Dumbbell'},
      {
        images: ['img/workout-icon.jpg'],
        label : 'Upright Cable Rows'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Upright Barbell Rows'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Seated Military Press On Smith Machine (Front)'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Seated Military Press On Smith Machine (Back)'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Military Shoulder Barbell Presses (Front)'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Military Shoulder Barbell Presses (Back)'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Single Side Cable Lateral Raise'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Standing Shrugs with Dumbbells'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Standing Shrugs with Barbell'
      },
      {
        images: ['img/face-pull-1.jpg', 'img/face-pull-2.jpg'],
        label : 'Face Pull'
      },
      {
        images: [
          'img/side-laterals-to-front-raises-1.jpg',
          'img/side-laterals-to-front-raises-2.jpg',
          'img/side-laterals-to-front-raises-3.jpg',
          'img/side-laterals-to-front-raises-4.jpg'
        ],
        label: 'Side Laterals to Front Raises'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Smith Machine Shrugs'
      },
      {
        images: ['img/seated-shoulder-press-machine.jpg'],
        label : 'Seated Machine Shoulder Presses'
      }
    ],
    'Back' : [
      {
        images: ['img/workout-icon.jpg'],
        label : 'Pull-Ups'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Wide-Grip Lat Pulldown'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'One-Arm Dumbbell Rows'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Seated Cable Rows'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Back Extensions'
      },
      {
        images: ['img/machine-back-extension.jpg'],
        label : 'Machine Back Extensions'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Straight-Arm Pulldowns'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Bent-over Barbell Rows'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Deadlifts'
      },
      {
        images: ['img/t-bar-row-with-handle.png'],
        label : 'T-Bar Row with Handle'
      }
    ],
    'Biceps' : [
      {
        images: ['img/workout-icon.jpg'],
        label : 'Seated Alternate Dumbbell Curl'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Barbell Curls'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Preacher Curls'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Concentration Curls'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Dumbbell Becips Curls'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Cable Curls'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Hammer Curls'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Seated Inclined Biceps Curls'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Lying Dumbbell Biceps Curls'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Close Grip Chin Ups'
      }
    ],
    'Triceps' : [
      {
        images: ['img/workout-icon.jpg'],
        label : 'Lying Triceps Presses'
      },
      {
        images: ['img/tricep-dumbbell-kickback.png'],
        label : 'Triceps Kickbacks'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Triceps Pushdowns'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Overhead Rope Extensions'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Bench Dips'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Dips on the Dip Machine'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Close Grip Bench Press'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'One Arm Dumbbell Extension'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Seated Triceps Dumbbell Extension'
      }
    ],
    'Legs' : [
      {
        images: ['img/workout-icon.jpg'],
        label : 'Barbell Squats'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Leg Presses'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Leg Extensions'
      },
      {
        images: ['img/dumbbell-lunges.png'],
        label : 'Dumbbell Lunges'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Sissy Squat'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Lying Leg Curls'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Seated Calf Raises'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Standing Heel Raises'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Squats on Smith Machine'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Stift-leg Deadlifts'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Glute Machine'
      }
    ],
    'Abs' : [
      {
        images: ['img/workout-icon.jpg', 'img/workout-icon.jpg'],
        label : 'Floor Crunches'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Incline Knee Raises'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Decline Crunches'
      },
      {
        images: ['img/incline-situps.png'],
        label : 'Incline Sit Ups'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Hanging Knee Raises'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Reverse Crunches'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Cable Crunches'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'The Swiss ball crunch'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Knee Raises'
      },
      {
        images: ['img/lying-leg-raises-s1.png', 'img/lying-leg-raises-s2.png'],
        label : 'Lying Leg Raise'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Vertical Leg Raises'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Plank'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Dumbbell side bends'
      },
      {
        images: ['img/workout-icon.jpg'],
        label : 'Vacuum'
      },
      {
        images: ['img/side-bends-at-hyperextension.png'],
        label : 'Side Bends at Hyperextension'
      },
      {
        images: ['img/cable-kneeling-crunch.png'],
        label : 'Cable Kneeling Crunches'
      },
      {
        images: ['img/abdominal-air-bike-1.png', 'img/abdominal-air-bike-2.png'],
        label : 'Abdominal Air Bike'
      },
      {
        images: ['img/plank-with-arm-raise-1.png', 'img/plank-with-arm-raise-2.png', 'img/plank-with-arm-raise-3.png'],
        label : 'Plank with Arm Raise'
      },
      {
        images: ['img/side-plank-1.png'],
        label : 'Side Plank'
      }
    ]
  })
