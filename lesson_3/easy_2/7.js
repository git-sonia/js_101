let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let newArr = Object.entries(flintstones).filter(entry => entry[0] === 'Barney').flat();

console.log(newArr);
