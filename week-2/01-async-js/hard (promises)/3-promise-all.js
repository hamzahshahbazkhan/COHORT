/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    const p = new Promise((resolve, reject) => {
        setTimeout(resolve, t * 1000)
    });
    return p;
}

function wait2(t) {
    const p = new Promise((resolve, reject) => {
        setTimeout(resolve, t * 1000)
    });
    return p;
}

function wait3(t) {
    const p = new Promise((resolve, reject) => {
        setTimeout(resolve, t * 1000)
    });
    return p;
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
    const allPromise = Promise.all([wait1(t1), wait2(t2), wait3(t3)])
    return allPromise.then(() => {
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        return elapsedTime;
    })
}

module.exports = calculateTime;
