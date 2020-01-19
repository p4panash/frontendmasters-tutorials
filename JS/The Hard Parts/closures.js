// link http://csbin.io/closures

// Challenge 1
function createFunction() {
    function log() {
        console.log("hello")
    }
    return log
}
const function1 = createFunction();
function1();

// Challenge 2
function createFunctionPrinter(input) {
    function log() {
        console.log(input)
    }
    return log
}
const printSample = createFunctionPrinter('sample');
const printHello = createFunctionPrinter('hello')
// now we'll call the functions we just created
printSample(); //should console.log('sample');
printHello(); //should console.log('hello');

// Challange 3
function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();
  
// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter(); // counter 1
willCounter(); // counter 2
willCounter(); // counter 3

jasCounter(); // counter 1
willCounter(); // counter 4

// Challange 4
function addByX(x) {
    return input => input + x;
}

const addByTwo = addByX(2);
console.log(addByTwo(1)); //should return 3
console.log(addByTwo(2)); //should return 4
console.log(addByTwo(3)); //should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); //should return 4
console.log(addByThree(2)); //should return 5

const addByFour = addByX(4);
console.log(addByFour(4)); //should return 8
console.log(addByFour(10)); //should return 14

// Challenge 5
function once(func) {
    result = null
    function run(input) {
        if (result == null)
            result = func(input)
        return result
    }
    return run
}
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6
const onceFunc2 = once(addByThree)
console.log(onceFunc2(4));  //should log 7
console.log(onceFunc2(10));  //should log 7

// Challange 6
function after(count, func) {
    times = 0
    function run() {
        if (times + 1 == count)
            return func()
        times++;
    }
    return run
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed

// Challenge 7
function delay(func, wait) {
    function run() {
        setTimeout(func, wait)
    }
    return run
}
const delayCalled = delay(() => console.log('test'), 1000)
console.log(delayCalled())

// Challange 8
function rollCall(names) {
    index = 0
    function run() {
        if (index >= names.length)
            console.log("Everyone accounted for")
        else
            console.log(names[index])
        index++;
    }
    return run
}
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // -> Should log 'Victoria'
rollCaller() // -> Should log 'Juan'
rollCaller() // -> Should log 'Ruth'
rollCaller() // -> Should log 'Everyone accounted for'