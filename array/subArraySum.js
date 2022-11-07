const arr = [1,4,7,8,7,54,4]

const sum = 15;


let maxSum = 0;
for(let i=0;i<arr.length;i++){
    maxSum += arr[i]
    if(maxSum > sum){
        
    }
    if(maxSum == sum){
      console.log("Found");
    }
    
 
}

console.log(maxSum);
