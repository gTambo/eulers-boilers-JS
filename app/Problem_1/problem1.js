function CountMultiplesOf3And5(int) {
    
    const multiples_of_3_and_5 = [];
    for(let i = 3; i < int; i++) {
        let j = i % 3;
        let k =  i % 5;
        if(j === 0 || k === 0){
            multiples_of_3_and_5.push(i);
        }

    }

    return multiples_of_3_and_5.reduce((a, b) => a + b, 0);
}

const start = process.hrtime.bigint()
await CountMultiplesOf3And5(1000);
const end = process.hrtime.bigint();

console.log(`Execution time: ${end - start} ns`);

console.log("Multiples of 3 and 5", CountMultiplesOf3And5(1000));


export default CountMultiplesOf3And5;