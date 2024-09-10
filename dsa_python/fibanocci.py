# fibonacci with loop
def fibonacci(n):
    prev2 = 0
    prev1 = 1

    print(prev2)
    print(prev1)
    for fibo in range(n):
        new_fibo = prev1 + prev2
        print(new_fibo)
        prev2 = prev1
        prev1 = new_fibo


fibonacci(10)

# fibonacci with recursion
print(0)
print(1)
count = 2

def fibonacci_recur1(prev1, prev2):
    global count
    if count <= 19:
        new_fibo = prev1 + prev2
        print(new_fibo)
        prev2 = prev1
        prev1 = new_fibo
        count += 1
        fibonacci_recur1(prev1, prev2)
    else:
        return


fibonacci_recur1(1, 0)


# Finding The nth Fibonacci Number Using Recursion
def fibonacci_recur(n):
    if n <= 1:
        return n
    else:
        return fibonacci_recur(n-1) + fibonacci_recur(n-2)

print(fibonacci_recur(12))
