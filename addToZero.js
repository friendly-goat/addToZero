/*
Given an array of numbers, console.log True if any two numbers in the array add to zero, otherwise log False.

For example:

[1, 4, 11, 2, 37, -4] should log True because 4 and -4 add to 0.

[0, 21, 33, 6, 0, -9] should log True because 0 and 0 add to 0.

[0, 1, 2, 3, 4, 5] should log False because no two numbers add to 0.
*/

// Starting array
function boolClog(tempbool){
    if(tempbool){
        console.log('True');
    }else{
        console.log('False');
    }
}
//let array = [28, 43, -12, 30, 4, 0, 12];
let array = [0, 21, 33, 6, 0, -9];
let check = false;

for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
        if(array[i] + array[j] == 0){
            check = true;
            console.log(array[i] , array[j])
        }
    }
}
boolClog(check);

// Write your solution below: