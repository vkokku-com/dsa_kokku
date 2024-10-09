function isPalindrome(num) {
    let n, k, rev = 0;
    n = num;
    while (num !== 0) {
        k = num % 10;
        rev = (rev * 10) + k;
        num = Math.floor(num / 10);
    }
    return n === rev;
}


let num = 9687;


while (!isPalindrome(num)) {
    num = num + 1;
}

console.log("Next Palindrome :");
console.log(num);

