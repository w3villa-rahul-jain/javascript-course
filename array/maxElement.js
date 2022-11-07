console.log("Max Element Program");

const arr = [23,78,13,90,24,48,91];



const maxElement = (array)=>{

let max = 0;
for(let i=0; i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
    }
}
console.log("Maximum Element is " + max);
}

maxElement(arr);







