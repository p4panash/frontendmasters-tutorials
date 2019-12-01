// Variable destructuring

const {name, weapon, room} = {"name": "Rusty", "room": "kitchen", "weapon": "candlestick"}

// omit certain values
var [a, , b] = [1, 2, 3]
// => 1 3

// combine with spread operator
var [a, ...b] = [1, 2, 3]
// => 1, [2, 3]

// swap variables
var a = 1, b = 2;
[b, a] = [a, b]
// a = 2, b = 1

// advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
// a = 1, b = 2, c = [[3, 4], 5], d = 6