const arr = [1,4,7,9,17,20,35];
const key = 7; 

const binarySearch = (array, key ) =>{
    let start = 0;
    let end = array.length-1;
   
    let mid = parseInt(start + (end - start)/2);

    while(start <= end ){
        if(array[mid] == key){
            return `Element Present in index  ${mid}`;
        }
        else if(key > array[mid]){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
        mid = parseInt(start + (end - start)/2);
        }
    return -1;

}

console.log(binarySearch(arr, key));




