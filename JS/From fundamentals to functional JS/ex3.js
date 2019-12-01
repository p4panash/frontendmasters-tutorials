// Looping
const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

var gameLoop = function() {
    for (var i = 0; i < game.suspects.length; i++) {
        for (var key in game.suspects[i]) {
            if (game.suspects[i][key] == "Rusty") {
                console.log('Found \'em !')
            } else {
                console.log('Next time!')
            }
        }
    }
}

function foo() {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);
    }
}

foo()

//destructure
var suspects = [
    {
        name: "Rusty",
        color: "orange"
    }, {
        name: "Miss Scarlet",
        color: "red"
    }
]
var [{color: firstColor}, {color: secondColor}] = suspects
console.log(firstColor)