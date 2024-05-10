// const object = {
//   obj1:'abc',
//   obj2:'def',
//   obj3:'ghi'
// }

// //print normal
// console.log(object)
// console.log(Object.keys(object))
// console.log(Object.values(object))

// array=(Object.keys(object))
// for (i in (array)){
//   console.log(array[i]);
// }
// console.log(array.length)


const capitales = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  countries=(Object.keys(capitales))
  capitals=(Object.values(capitales))
  for (activecountry of countries){
    if (country === activecountry){
      console.log(capitals[(countries.indexOf(activecountry))])
    }
  }
}

getCapital('Italy')

