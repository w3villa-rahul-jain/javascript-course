const arr = [1,2,3,4,5,6]

const len = arr.length;
const k = 3;
const arr1 = [];

for(let i=0;i<len;i++){
    arr1[(i+k)%(len)] = arr[i];
}

console.log(arr1);