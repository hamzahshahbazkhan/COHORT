/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let startTime = performance.now();
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum - sum + i;
    }
    let endTime = performance.now();
    let elapsedTime = endTime - startTime;
    return elapsedTime;
}

let a = 100;
let totalTime_a = calculateTime(a);

console.log(`Total time: ${totalTime_a} milliseconds`);


let b = 100000;
let totalTime_b = calculateTime(b);

console.log(`Total time: ${totalTime_b} milliseconds`);


let n = 1000000000;
let totalTime = calculateTime(n);

console.log(`Total time: ${totalTime} milliseconds`);