const arr = [1,1,1,1,2,2,2,2,3,4,4,4,4,5,5,5,5];

const arr2 = [1,2,3,3,1,2,2,2,2];



const uniqueElement = (array) =>{

    let len = array.length;
    let element = 0; 
    for(let i=0;i<len;i++){
        element ^= array[i]; 
    }
    return element;
}

console.log(uniqueElement(arr2));
