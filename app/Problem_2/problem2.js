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

console.log(fibonacciArray(34));