const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}


function primesLessThan(int){
    const primes_arr = [];
    const not_prime = [];
    if( int < 1 ) primes_arr;
    for(let i = 2; i*i <= int; i++){
        
        for(let j = i * i; j <= int; j += i){
            not_prime.push(j);
        }
    }
    for (let k = 2; k < int; k++){
        if(!not_prime.includes(k)){
            primes_arr.push(k);
        }
    }
    return primes_arr;
}

console.log(primesLessThan(50));


/*
const range = 1000;

// Delaring an array of length 'range+1'
const is_prime = Array.from({ length: range + 1 });

// Calling Sieve Of Eratosthenes function
SieveOfEratosthenes(is_prime, range);

// 'number' will hold a random number in
// the range [0, range]
const number = 23; // Math.floor(Math.random() * range);

// Since we know that 1 is neither prime nor composite.
if (number == 1) {
   console.log(" 1 is neither prime nor composite");
}

// This is the condition we are concerned about
// i.e. any positive number greater than 1.
else if (number > 1) {
   if (is_prime[number] == true) console.log(`${number} is a prime number`);
   // Otherwise, no divisor was found.
   else console.log(`${number} is not a prime number`);
}

// If the number is less than 1 (either 0 or negative)
// then we can say it is not a prime number.
else {
   console.log(`${number} is not a prime number`);
}
const primes_below_fifty = [];
for(let i = 2; i <= 50; i++) {
    if(is_prime[i]) primes_below_fifty.push(i);
}
console.log("primes below 50: ", primes_below_fifty);
function SieveOfEratosthenes(is_prime, n) {
   // Mark all entries of is_prime to be true.
   for (let i = 0; i <= n; i++) is_prime[i] = true;

   // Iterate from 2 to root(n)
   for (let i = 2; i <= Math.sqrt(n); i++) {
      // If is_prime[i] is true, mark
      // all multiple of i (say 'j') as
      // false such that j >= i*i
    //   if ((is_prime[i] = true)) {
         for (let j = i * i; j <= n; j += i) is_prime[j] = false;
    //   }
   }
}
*/