"use strict"

function sortArray(array) {
    const numberSort = [];
    for(let item of array) {
        let result = item.charCodeAt();
        numberSort.push(result);
    }
    numberSort.sort((a,b) => b - a);
    mainArray.splice(0, 10);
    for(let number of numberSort) {
        let letter = String.fromCharCode(number)
        mainArray.push(letter)
    }
    console.log(mainArray)
}

const mainArray = ["b","c","a"]
sortArray(mainArray)