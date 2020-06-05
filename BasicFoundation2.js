// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
//    Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function numOne(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            arr[i] = 'big';
        }
    }
    return arr;
}

// 2. Print Low, Return High - Create a function that takes in an array of numbers.  
//    The function should print the lowest value in the array, and return the highest value in the array.

function numTwo(arr){
    var max = -Infinity, min = +Infinity;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  
//    The function should print the second-to-last value in the array, and return the first odd value in the array.

function numThree(arr){
    var foundFirstOdd = false;
    var firstOdd;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0 && foundFirstOdd == false){
            firstOdd = arr[i];
            foundFirstOdd = true;
        }
    }
    console.log(arr[arr.length - 2]);
    return firstOdd;
}

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  
//    Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function numFour(arr){
    newArr = [];

    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2);
    }
    return newArr;
}

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  
//     Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function numFive(arr){
    var sumPositive = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            sumPositive++;
        }
    }
    arr[arr.length - 1] = sumPositive;
    return arr;
}

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
//    Every time the array has three evens in a row, print "Even more so!".

function numSix(arr){ // Nested if statements for readability

    for(var i = 0; i < arr.length; i++){
        // Ensure arr is long enough
        if(i >= 2){
            // Check current and previous two array indexes for odd
            if(arr[i] % 2 != 0 && arr[i-1] % 2 != 0 && arr[i-2] % 2 != 0){
                console.log("That's odd!");
            }
            // Check current and previous two array indexes for even
            else if(arr[i] % 2 == 0 && arr[i-1] % 2 == 0 && arr[i-2] % 2 == 0){
                console.log("Even more so!");
            }
        }
    }
}

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
//    Afterward, console.log each array value and return arr.

function numSeven(arr){
    for(var i = 0; i < arr.length; i++){
        if(i % 2 != 0){
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
//    Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  
//    For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function numEight(arr){
    for(var i = arr.length-1; i >= 0; i--)
        // Ensure there is a previous array index
        if(i >= 1){
            arr[i] = arr[i-1].length; // Set current index to length of previous
        }
    return arr;
}

// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  
//    Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function numNine(arr){
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  
//     Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  
//     Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function numTen(arr){
    var temp;

    for(var i = 1; i <= arr.length/2; i++){
        temp = arr[i-1];
        arr[i-1] = arr[arr.length-i];
        arr[arr.length-i] = temp;
    }
    return arr;
}

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, 
//     but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function numEleven(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] *= -1;
        }
    }
}

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".
//     If no array values are "food", then print "I'm hungry" once.

function numTwelve(arr){ //TODO: find way where I don't have to assign yesFood to true each time nor use an additional if statement for better optimization
    var yesFood = false;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 'food'){
            console.log('yummy');
            yesFood = true;
        }
    }
    if(!yesFood){
        console.log('I\'m hungry');
    }
}

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.
//     Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  
//     swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function numThirteen(arr){
    var temp;

    // swap first and last
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    // swap third and third-to-last
    temp = arr[2];
    arr[2] = arr[arr.length-3];
    arr[arr.length-3] = temp;
}

// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  
//     For example, scaleArray([1,2,3], 3) should return [3,6,9].

function numFourteen(arr, num){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= num;
    }
    return arr;
}