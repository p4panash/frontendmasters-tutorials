// translate the following functions in ES6

var increment = function(n) { return n + 1; }
var square = function(n) { return n * n; }
var doMathSoIDontHaveTo = function(n, func){ return func(n); }
doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);

// ES6
const increment = n => n + 1
const square = n => n * n
const doMathSoIDontHaveTo = (n, func) => func(n)
doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);
