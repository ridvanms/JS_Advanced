function getFibonator(){
    let numb = 1;
    let previous = 0;
    function fib(){
        let fibonator = numb + previous;
        numb = previous;
        previous = fibonator;
        return fibonator;
    }
    return fib
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());