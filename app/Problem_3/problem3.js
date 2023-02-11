function checkPrime(int) {
    if(int < 2 ) {
        return false;
    } else if (int === 2) {
        return true;
    } else {
        for(let i = 2; i < int; i++) {
            if(int % i === 0) {
                return false;
            }
        }
        return true;
    }
}

// function generateIntegerArray(length) {
//     const arr = [];
//     for(let i = 0; i < length; i++) {
//         arr.push(i + 1);
//     }
//     return arr;
// }

function findHighestPrimeFactor(int){
    // const factors = [];
    // const possibleFactors = generateIntegerArray(int);
    let start = 2;
    let end = Math.floor(int / 2);
    while(start <= end){
        if(int % end === 0) {
            // factors.push(end);
            if(checkPrime(end)){
                return end;
            }
        } 
        if (int % start === 0) {
            // factors.push(start);
            if(checkPrime(start)){
                return start;
            }
        }
        start++;
        end--;
    }
    return "none found";
}

function returnPrime(int) {
    let divisorLess = Math.floor(int / 2);
    let divisorMore = Math.ceil(int / 2);
    console.log("divisorLess: ", divisorLess, 'divisorMore: ', divisorMore);
    console.log('int: ', int);

    if(divisorLess === divisorMore){
        return false;
    }
    if(divisorLess === 1){
        return true;
    }
    // if(int % divisor === 0){
    //     return false;
    // }

    while(int % divisorLess > 0){
        return returnPrime(divisorMore);
    }
}

const countTo20 = generateIntegerArray(20);
const countTo100 = generateIntegerArray(100);

// function testPrimeChecker(arr) {
//     const primes = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(checkPrime(arr[i])){
//             primes.push(arr[i]);
//         }
//     }
//     return primes;
// }
console.log('check highest prime factor of 600851475143...', findHighestPrimeFactor(600851475143));
console.log(checkPrime(71));
// console.log("hopefully not infinite...", returnPrime(101));
// console.log("checking primes up to 100...", testPrimeChecker(countTo100));
// console.log('looking for factors of 13195: ', findFactors(13195).filter(x => checkPrime(x)));

export default checkPrime;