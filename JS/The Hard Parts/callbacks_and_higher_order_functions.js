// link http://csbin.io/callbacks

// Challenge 1
function addTwo(num) {
    return num + 2
}
console.log(addTwo(3))
console.log(addTwo(10))

// Challange 2
function addS(word) {
    return word + 'S'
}
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challange 3
function map(list, callback) {
    result = []
    for (i = 0; i < list.length; i++)
        result.push(callback(list[i]));
    return result;
}
console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for (i = 0; i < array.length; i++)
        callback(array[i]);
}
// Check
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'

// Extension 1
function mapWith(array, callback) {
    result = []
    forEach(array, function(item) {
        result.push(callback(item))
    })
    return result 
}
console.log(mapWith([1, 2, 3], addTwo));

// Extension 2
function reduce(array, callback, initialValue) {
    forEach(array, function(item) {
        initialValue = callback(initialValue, item);
    })
    return initialValue;
}
// Check
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0));   //-> 8

// Extension 3
function intersection(...arrays) {
    result = []
    const common_elements = function(a, b) {
        if (a.length == 0)
            return b
        elements = []
        forEach(a, function(item) {
            if (b.includes(item)) {
                elements.push(item)
            }
        })
        return elements       
    }
    return reduce(arrays, common_elements, result)
}
// should log: [5, 15]
console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])); 

// Extension 4
function union(...arrays) {
    result = []
    const concat_arrays = function(a, b) {
        if (a.length == 0)
            return b;
        forEach(b, function(item) {
            if (a.indexOf(item) == -1)
                a.push(item)
        })
        return a;
    }
    return reduce(arrays, concat_arrays, result)
}
// should log: [5, 10, 15, 88, 1, 7, 100]
console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));

// Extension 5
function objOfMatches(array1, array2, callback) {
    result = {}
    for (i = 0; i < array1.length; i++)
        if (array2[i] == callback(array1[i]))
            result[array1[i]] = array2[i]
    return result
}
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }
console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));

// Extension 6
function multiMap(arrVals, arrCallbacks) {
    result = {}
    for (i = 0; i < arrVals.length; i++) {
        item = arrVals[i]
        result[item] = []
        for (j = 0; j < arrCallbacks.length; j++) {
            result[item].push(arrCallbacks[j](item))
        }
    }
    return result
}
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));

// Extension 7
function objectFilter(obj, callback) {
    result = {}
    for (key in obj)
        if (callback(key) == obj[key])
            result[key] = obj[key]
    return result 
}
const cities = {
    London: 'LONDON',
    LA: 'Los Angeles',
    Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}