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


function findHighestPrimeFactor(int){
    let start = 2;
    let end = Math.floor(int / 2);
    while(start <= end){
        if(int % end === 0) {
            if(checkPrime(end)){
                return end;
            }
        } 
        if (int % start === 0) {
            if(checkPrime(start)){
                return start;
            }
        }
        start++;
        end--;
    }
    return "none found";
}

const start = process.hrtime.bigint()
console.log(findHighestPrimeFactor(600851475143));
const end = process.hrtime.bigint();
console.log(`Execution time: ${end - start} ns`);


export default checkPrime;