function CountMultiplesOf3And5(int) {
    
    const multiples_of_3_and_5 = [];
    let limit = int;
    for(let i = 3; i < limit; i++) {
        let j = i % 3;
        let k =  i % 5;
        if(j === 0 || k === 0){
            multiples_of_3_and_5.push(i);
        }

    }

    return multiples_of_3_and_5;
}
console.log("Multiples of 3 and 5", CountMultiplesOf3And5(1000));

export default CountMultiplesOf3And5;