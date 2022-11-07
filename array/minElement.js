console.log("Min Element Program");

const arr = [23,78,13,90,24,48,91];
let min = arr[0];

for(let i=0; i<arr.length;i++){
    if(arr[i] <  min){
        min = arr[i];
    }
}

console.log("Minimum Element is " + min);






