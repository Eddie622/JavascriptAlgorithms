// Part One

// 1. Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  
//    Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num) {
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// 2. Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  
//    For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num) {
    var product = 1;

    for (var i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}

// 3. Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, 
//    starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 
//    4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 
//    (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), 
//    fibonacci(7) = 13 (5+8).  Do this without using recursion first.

function fibonacci(num) {
    var secondPrevious = 0, firstPrevious = 1, current = num;

    if(num >= 2){
        for(var i = 1; i < num; i++){
            current = firstPrevious + secondPrevious;
            secondPrevious = firstPrevious;
            firstPrevious = current;
        }
    }
    return current;
}

// 4. Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondToLast(arr) {
    if (arr.length >= 2) {
        return arr[arr.length - 2];
    }
    else {
        return null;
    }
}

// 5. Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nthToLast(arr, n) {
    if (arr.length >= n) {
        return arr[arr.length - n];
    }
    else {
        return null;
    }
}

// 6. Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr) { //TODO: find a more optimized method of finding second largest num
    var max = -Infinity;
    var secondLargest = max;

    if (arr.length >= 2) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                secondLargest = max
                max = arr[i];
            }
            else if (arr[i] < max && arr[i] > secondLargest) {
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }
    else {
        return null;
    }
}

// 7. Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  
//    Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doubleTrouble(arr) {
    for (var i = 0; i < arr.length; i += 2) {
        arr.splice(i, 0, arr[i]);
    }
    return arr;
}

// Part Two

// 1. Create a function Fib(n) where it returns the nth Fibonacci number.  Use recursion for this.

function Fib(n){
    if(n == 0 || n == 1){
        return n;
    }
    return(Fib(n-1) + Fib(n-2));
}

// 2. Recursive Fill (index.html included)

// function fill(x,y,original_color, color){	
//     //your recursion codes here
//     if(world[y][x] != original_color){
//         return;
//     }

//     world[y][x] = color;

//     // your recursion codes here
//     if(x+1 < 10){
//         fill(x+1,y,original_color, color);
//     }
//     if(x-1 >= 0){
//         fill(x-1,y,original_color, color);
//     }
//     if(y+1 <= 6){
//         fill(x,y+1,original_color, color);
//     }
//     if(y-1 >= 0){
//         fill(x,y-1,original_color, color);
//     }

//     drawWorld();	
// }
