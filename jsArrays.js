
var mma = require('mma');
var data = [];
mma.fighter('Luke Rockhold', function (f1) {
// console.log(data);
// console.log(f1.name);
  mma.fighter('Yoel Romero', function (f2) {
    var fighters = [];
    // console.log(f1.name + ' ' + f2.name);
    fighters.push(f1);
    fighters.push(f2);
    // console.log(fighters);

    // for loop to log each object.fighersName
    // for (let i = 0; i < fighters.length; i++){
    //   console.log(fighters[i].name);
    // }

    // forEach loop callback
    // fighters.forEach(function (fighter, index, fighters) {
    //   console.log(fighter.name);
    // });

    // forEach loop arrow function
    // fighters.forEach((fighter, index, fighters) => console.log(fighter.name));

    // filter for loop style
    // let oldFighter = [];
    // let youngFighter = [];
    // for (let i = 0; i < fighters.length; i++){
    //   if (fighters[i].age >= 35) {
    //     oldFighter.push(fighters[i].name + " " + fighters[i].age);
    //   }
    //   else {
    //     youngFighter.push(fighters[i].name + " " + fighters[i].age);
    //   }
    // }
    // console.log(`old: ${oldFighter}`);
    // console.log(`young: ${youngFighter}`);

    // filter callback
    // fighters.filter(function (fighter, index, fighters) {
    //   if (fighter.age >= 35) {
    //     console.log(`old: ${fighter.name} ${fighter.age}`);
    //   }
    //   else {
    //     console.log(`young: ${fighter.name} ${fighter.age}`);
    //   }
    // })

    // filter arrow function. this one returns object
    // var oldFighter = fighters.filter((fighter, index, fighters) => fighter.age >= 35);
    // console.log(oldFighter);

    // filter arrow functrion full
    // var oldFighter = fighters.filter((fighter) => {
    //   if (fighter.age >= 35) {
    //     console.log(`old: ${fighter.name} ${fighter.age}`);
    //   }
    //   else {
    //     console.log(`young: ${fighter.name} ${fighter.age}`);
    //   }
    // });

    
  });
});

// mma.fighter('Yoel Romero', function (f2) {
//   // console.log(f2.name);

// });

// mma.fighter('Ronda Rousey', (f3) => {
//   // console.log(f3.name);
// });

// { name: 'Jon Jones',
//   nickname: 'Bones',
//   fullname: 'Jon "Bones" Jones',
//   record: '',
//   association: 'Jackson-Wink MMA',
//   age: '30',
//   birthday: '1987-07-19',
//   hometown: '',
//   nationality: 'United States',
//   location: '',
//   height: '',
//   height_cm: '',
//   weight: '',
//   weight_kg: '',
//   weight_class: 'Light Heavyweight',
//   college: '',
//   degree: '',
//   summary: [],
//   wins:
//    { total: 22,
//      knockouts: 9,
//      submissions: 6,
//      decisions: 7,
//      others: 0 },
//   losses: { total: 1, knockouts: 0, submissions: 0, decisions: 0, others: 0 },
//   strikes: { attempted: 0, successful: 0, standing: 0, clinch: 0, ground: 0 },
//   takedowns:
//    { attempted: 0,
//      successful: 0,
//      submissions: 0,
//      passes: 0,
//      sweeps: 0 },
//   fights:
//    [ { name: 'UFC 214 - Cormier vs. Jones 2',
//        date: 'Jul / 29 / 2017',
//        url: '/events/UFC-214-Cormier-vs-Jones-2-57825',
//        result: 'NC',
//        method: 'NC (Overturned by CSAC)',
//        referee: 'John McCarthy',
//        round: '3',
//        time: '3:01',
//        opponent: 'Daniel Cormier' }
//     }
//   ]
// }


// for

// forEach()

// filter

// map

// sort

// reduce