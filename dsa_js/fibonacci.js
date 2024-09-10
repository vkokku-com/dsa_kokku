// fibonacci with loop
function fibonacci(n) {
    let prev2 = 0;
    let prev1 = 1;
    let new_fibo;
    console.log(prev2);
    console.log(prev1);
    for (let i = 1; i < n; i++) {
        new_fibo = prev1 + prev2;
        console.log(new_fibo);
        prev2 = prev1;
        prev1 = new_fibo;
    }
}

fibonacci(5);

// fibonacci with recursion
console.log(0);
console.log(1);
let count = 2;

function fibonacci_recur(prev1, prev2) {
    if (count <= 19) {
        let new_fibo = prev1 + prev2;
        console.log(new_fibo);
        prev2 = prev1;
        prev1 = new_fibo;
        count += 1;
        fibonacci_recur(prev1, prev2);
    }
}

fibonacci_recur(1, 0);

// Finding The nth Fibonacci Number Using Recursion
function fibonacci_recur1(n) {
    if (n <= 1)
        return n;
    else
        return fibonacci_recur1(n - 1) + fibonacci_recur1(n - 2);
}
console.log(fibonacci_recur1(12));