function reverseString(string){
    var stringReversed = '';

    for(var i = string.length - 1; i >= 0; i--){
        stringReversed += string[i];
    }
    return stringReversed;
}

reverseString('hello');