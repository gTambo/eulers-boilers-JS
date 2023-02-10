export default function CountMultiplesOf3And5() {
    let multiples_of_3_and_5 = [];

    for(i = 0; i < 1000; i++) {
        if(i %= 3 === 0){
            multiples_of_3_and_5.push(i)
        } else if( i %= 5 === 0){
            multiples_of_3_and_5.push(i)
        }

    }
    return multiples_of_3_and_5;
}
console.log("Multiples of 3 and 5", CountMultiplesOf3And5());