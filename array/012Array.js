const arr = [0,1,2,2,2,2,1,1,1,0,0,0,0,2,1,0,0,2,1,2];

let count0=0, count1=0, count2=0;

for(let i=0;i<arr.length;i++){
    if(arr[i] == 0){
        count0++;
    }
    if(arr[i] == 1){
        count1++;
    }
    if(arr[i] == 2){
        count2++;
    }
}

console.log(count0);
console.log(count1);
console.log(count2);

for(let i=0;i<count0;i++){
    arr[i] = 0;
}

for(let i=count0;i<(count0+count1);i++){
    arr[i] = 1;
}

for(let i=count0+count1;i<arr.length;i++){
    arr[i] = 2;
}

console.log(arr);



