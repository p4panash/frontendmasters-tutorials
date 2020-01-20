// link http://csbin.io/async
// Challenge 1

function sayHowdy() {
    console.log('Howdy');
}

function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
}

// testMe(); // should log Partnah first then Howdy

// Challenge 2
function delayedGreet() {
    setTimeout(() => console.log('welcome'), 3000)
}
// delayedGreet()

// Challenge 3
function helloGoodbye() {
    setTimeout(() => console.log('goodbye'), 3000)
    console.log('hello')
}
// helloGoodbye();

// Challenge 4
function brokenRecord() {
    setInterval(() => console.log('hi again'), 1000)
}
// brokenRecord()

// Challenge 5
function limitedRepeat() {
    count = 0
    function run() {
        if (count < 5)
            console.log('hi for now')
        else
            clearInterval(repeat)
        count++
    }
    repeat = setInterval(run, 1000)
}
//limitedRepeat()

// Challenge 6
function everyXsecsForYsecs(func, interval, duration) {
    count = 0
    function run() {
        if (count < ~~(duration / interval))
            func()
        else
            clearInterval(repeat)
        count++
    }
    repeat = setInterval(run, interval)
}

function theEnd() {
  console.log('This is the end!');
}
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 ms, for 20 ms): This is the end!

// Challenge 7
function delayCounter(target, wait) {
    function delay() {
        count = 0
        function run() {
            if (count < target)
                console.log(count + 1)
            else
                clearInterval(repeat)
            count++
        }
        repeat = setInterval(run, wait)
    }
    return delay
}
const countLogger = delayCounter(3, 1000)
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3