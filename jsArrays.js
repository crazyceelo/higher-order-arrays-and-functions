
var mma = require('mma');
// var data = [];
// mma.fighter('Luke Rockhold', function (f1) {
// console.log(data);
// console.log(f1.name);
  // mma.fighter('Yoel Romero', function (f2) {
    // var fighters = [];
    // console.log(f1.name + ' ' + f2.name);
    // fighters.push(f1);
    // fighters.push(f2);
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

    // filter with return true
    // const oldFighter = fighters.filter(function (fighter) {
    //   if (fighter.age >= 35) {
    //     return true;
    //   }
    // });
    // console.log(oldFighter);

    // const oldFighter = fighters.filter(fighter => fighter.age >= 35);
    // console.log(oldFighter);

    // const youngFighter = fighters.filter(fighter => (fighter.age >= 18 && fighter.age <= 35));

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

    // let oldFighter = [];
    // let youngFighter = [];
    // fighters.filter((fighter) => {
    //   if (fighter.age >= 35) {
    //     oldFighter.push(fighter.name, fighter.age);
    //   }
    //   else {
    //     youngFighter.push(fighter.name, fighter.age);
    //   }
    // })
    // console.log(oldFighter);
    // console.log(youngFighter);

    // map
    // create array of fighter names
    // const fighterNames = fighters.map(function (fighter) {
    //   return fighter.name;
    // });
    // console.log(fighterNames);

    // map
    // const fighterTest = fighters.map(function (fighter) {
    //   return `name: ${fighter.name} wins: ${fighter.wins.total} losses: ${fighter.losses.total}`;
    // })
    // console.log(fighterTest);

    // map arrow function
    // const fighterTest = fighters.map(fighter =>
    //   `name: ${fighter.name} wins: ${fighter.wins.total} losses: ${fighter.losses.total}`);
    // console.log(fighterTest);

    // map 
    // const fighterAgeAve = fighters.map(fighter => `name: ${fighter.name} age: ${fighter.age} age*2: ${fighter.age * 2}`);
    // console.log(fighterAgeAve);

    // sort
    // const sortFighters = fighters.sort(function (f1, f2) {
    //   if (f1.age > f2.age) {
    //     return 1;
    //   } else {
    //     return -1
    //   }
    // })
    // console.log(sortFighters);

    // sort
    // const sortedFighters = fighters.sort((a, b) => (a.age > b.age ? 1 : -1));
    // console.log(sortedFighters);

    // map age, then sort by age
    // const fighterAge = fighters.map(fighter => fighter.age);
    // console.log(fighterAge);
    // const ageAscend = fighterAge.sort((a,b) => a-b);
    // console.log(ageAscend);
    // const ageDescend = fighterAge.sort((a,b) => b-a);
    // console.log(ageDescend);

    // reduce with for loop
    // let ageSum = 0;
    // for (let i = 0; i < fighterAge.length; i++){
    //   ageSum += fighterAge[i];
    // }
    // console.log(ageSum);

    // const ageSum = fighterAge.reduce(function (total, age) {
    //   return total + age;
    // }, 0);
    // console.log(ageSum);

    // const ageSum = fighterAge.reduce((total, age) => total + age, 0);
    // console.log(ageSum);
    
    // total years for fighters
    // const totalAge = fighters.reduce(function (total, fighter) {
    //   return total + fighter.age;
    // }, 0);
    // console.log(totalAge);

    // combine methods
    // const combined = fighters
    //   .map(fighter => fighter.age * 2)
    //   .filter(age => age >= 35)
    //   .sort((a, b) => b - a)
    //   .reduce((a, b) => a + b, 0);
    
    // console.log(combined);

//   });
// });

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



// valid promise
function getFighter(fightername){
  return new Promise((resolve, reject) => {
      mma.fighter(fightername,(data) =>{
          if(data){
              resolve(data.name);
          }else {
              reject('rejected');
          }
      })
  })
};

// multiple promise
// Promise.all([
//   getFighter('Jon Jones'),
//   getFighter('Yoel Romero'),
//   getFighter('Luke Rockhold')
// ]).then((data)=>{
//   console.log(`Promise.all function: ${data}`);
// })


async await
async function test() {
  const [fighter1, fighter2, fighter3] = await Promise.all([
    getFighter('Jon Jones'),
    getFighter('Yoel Romero'),
    getFighter('Luke Rockhold')
  ]);
  console.log(fighter1);
}
test();


// single promise
// getFighter('Jon Jones').then(function(data){
//   console.log(`Single Promise: ${data}`);
// })

// async await
// async function test1() {
//   const asdf = await getFighter("Jon Jones");
//   console.log(asdf);
// }
// test1();