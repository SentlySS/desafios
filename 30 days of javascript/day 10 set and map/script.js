// Exercise level 1

// 1. create an empty set
const emptySet = new Set();

// 2. Create a set containing 0 to 10 using loop
for(i=0 ; i < 10; i++){
  emptySet.add(i);
}

// 3. Remove an element from a set
emptySet.delete(2);

// 4. Clear a set
empty.clear();

// 5. Create a set of 5 string elements from array

const five = ['aracaju', 'sp', 'rj', 'barra','lagarto'];
const strings = new Set(five);

// 6. Create a map of countries and number of characters of a country
const countries = [['Brasil', 6], ['Argentina', 9], ['França', 6]];
const countriesLength = new Map(countries);

// Exercise level 2

// 1. Find a union b

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const c = [...a,...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

// 2. Find a intersection b
let d = a.filter(num => b.has(num));
