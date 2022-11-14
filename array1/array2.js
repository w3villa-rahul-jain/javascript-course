var isEven = (element) =>  {
    // if(element %2 ===0){
    //     return true;
    // }
    // return false;
    return element % 2 === 0;
}

// console.log(isEven(4));



// var result = [2,4,6,8,10].every(isEven);
// console.log(result);

// var result = [2,4,6,8,10].every((element) => element%2 ===0);
// console.log(result);


var result = [2,4,6,8,10].every((element) => ( element%2 === 0 ));
console.log(result);