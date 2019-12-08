// implement _.reduce and _.forEachRight

const _ = {};
// _.reduce implementation
_.reduce = (accumulator, callback, collection) => {
    result = collection;
    for (var key in accumulator) {
        result = callback(result, accumulator[key], key);
    }
    return result;
}

// testing
t1 = _.reduce([1, 2], (sum, n) => {
    return sum + n;
}, 0);
console.log(t1); // It should return 3

t2 = _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {}); // It should return { '1': ['a', 'c'], '2': ['b'] }

// _.forEachRight implementation
_.forEachRight = (collection, callback) => {
    for (var i = collection.length - 1; i >= 0; i--)
        callback(collection[i], i, collection);
}

_.forEachRight([1, 2], value => console.log(value)); // => Logs `2` then `1`