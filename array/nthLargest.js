const arr = [1,22,37,4,5,67,8,26,38,109,10];

const nthLargest = 5;


for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] > arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}


console.log(arr);

console.log(`The ${nthLargest} Largest Element is ${arr[nthLargest-1]}`);
console.log(`The ${nthLargest} Largest Element is ${arr[nthLargest-1]}`);


