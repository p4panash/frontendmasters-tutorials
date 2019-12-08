// array-like object

//ES5

const constructArr = function() {
    const arr = Array.prototype.slice.call(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
};
constructArr('was', 'it', 'in')

//ES6
const constructArr = function() {
    const arr = Array.from(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
};