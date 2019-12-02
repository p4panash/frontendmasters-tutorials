// _.map()

const weapons = ['candlestick', 'lead_pipe', 'revolver']
const makeBroken = function(item) {
    return `broken ${item}`;
}

var result = _.map(weapons, makeBroken);
console.log(result);

// implement map

const _ = {}

_.map = function(list, callback) {
    result = []
    if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++)
            result.push(callback(list[i], i, list))
    } else {
        for (var key in list)
        result.push(callback(list[key], key, list))
    }
    return result;
}

_.map = function(list, callback) {
    let result = []
    _.each(list, function(item, i, list) {
        result.push(callback(item, i, list))
    })
    return result;
}