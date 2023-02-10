// Fibonacci generator
function* fibonacci() {
    let a;
    let b;
    [a, b] = [0, 1]
    while (true) {
      yield a;
      [a, b] = [b, a + b]
    }
  }

function simpleFibonacci() {
    let a = 0;
    let b = 1;
    let c = 0;
    // let sum;
    const Fib_Arr = [];
    for(let i = 0; c < 4000000; i++){
        c = a;
        a = b;
        b = a + c;
        if(c < 4000000){
            Fib_Arr.push(c);
        }
    }
    console.log(Fib_Arr);
    return Fib_Arr;
}

function fibonacciArray(array_length) {  
    // Instantiates the fibonacci generator
    const fib = fibonacci();
    const fib_array = [];
    // gets first 10 numbers from the Fibonacci generator starting from 0
    for (let i = 0; i < array_length; i++) {
        // console.log(fib.next().value);
        fib_array.push(fib.next().value);
    }
    return fib_array;
}

let intialVal = 0;
const sumEven = simpleFibonacci().reduce((a, b) => (b % 2 === 0) ? a + b : a + 0, intialVal);

// console.log('simple fibonacci function: ', simpleFibonacci());
console.log('Sum of even Fibonacci numbers under 4m: ', sumEven);