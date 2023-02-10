function checkPrime(int) {
    console.log(`Checking if ${int} is prime`);
    if(int < 2 ) {
        return false;
    } else if (int === 2) {
        return true;
    } else {
        for(let i = 2; i < int; i++) {
            // console.log("i is: ", i);
            if(int % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function generateIntegerArray(length) {
    const arr = [];
    for(let i = 0; i < length; i++) {
        arr.push(i + 1);
    }
    return arr;
}

const countTo20 = generateIntegerArray(20);
const countTo100 = generateIntegerArray(100);

function testPrimeChecker(arr) {
    const primes = [];
    for(let i = 0; i < arr.length; i++) {
        if(checkPrime(arr[i])){
            primes.push(arr[i]);
        }
    }
    return primes;
}

// let check = checkPrime(16);
console.log("checking primes up to 100...", testPrimeChecker(countTo100));
// console.log("testing checkPrime function... 1", check);

export default checkPrime;