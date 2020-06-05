// 1. Given an array and a value Y, count and print the number of array values greater than Y.

function answerOne(arr, y){
    var sumGreater = 0;
    var arrGreater = [];

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            sumGreater++;
            arrGreater.push(arr[i]);
        }
    }
    console.log(`Total nums greater than second input value: ${sumGreater}`);
    console.log(`The nums that are greater than second input value: ${arrGreater}`);
}

// 2. Given an array, print the max, min and average values for that array.

function answerTwo(arr){
    var max = -Infinity, min = +Infinity, sum = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log(max, min, sum/arr.length);
}

// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   
//    For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function answerThree(arr){
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            newArr.push('Dojo');
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// 4. Given array, and indices start and end, remove values in that index range, working in-place (hence shortening the array).  
//    For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function answerFour(arr, start, end){

    arr.splice(2,(end - start + 1)); //second splice arg calculates number of spaces to splice to reach end index
    return arr;
}
