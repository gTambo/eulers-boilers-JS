function simpleFibonacci() {
    let a = 0;
    let b = 1;
    let c = 0;
    let sum = 0;
    for(let i = 0; c < 4000000; i++){
        c = a;
        a = b;
        b = a + c;
        if(c < 4000000 && c % 2 === 0){
            sum += c;
        }
    }
    return sum;
}



const start = process.hrtime.bigint()
const sumEven = await simpleFibonacci();
const end = process.hrtime.bigint();
console.log(`Execution time: ${end - start} ns`);
console.log('Sum of even Fibonacci numbers under 4m: ', sumEven);