// Using the given array:
var testArr = [6, 3, 5, 1, 2, 4];

// a) Print Values and Sum

// 1. Print each array value and the sum so far
// 2. The expected output will be: 
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

function valSum(arr) {
    var sum = 0;
    for (var i = 0; i < testArr.length; i++) {
        sum += arr[i];
        console.log(`Num ${arr[i]}, Sum ${sum}`);
    }
}
valSum(testArr);

// b) Value * Position

// 1. Multiply each value in the array by its array position
// 2. The expected output will be:
// [0,3,10,3,8,20]

function valPos(arr){
    for (var i = 0; i < testArr.length; i++){
        arr[i] *= i;
    }
    console.log(testArr);
}
valPos(testArr);