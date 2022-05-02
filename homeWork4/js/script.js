"use strict"

// Масив для 2 методу
const mainArray = []


function wrapTags(array,degree) {
// 1 метод
    let result = array.map(function(item) {
        return item**degree;
    })
    console.log(result)


// 2 метод
    // for(let item of array) {
    //     let result = item**degree;
    //     mainArray.push(result);
    // }
    // console.log(mainArray)
}

wrapTags([2,4,3,1],2);


