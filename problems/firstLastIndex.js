const arr = [1,3,3,3,3,3,3,3,3,3,4,4];
const element = 3;

const firstOccurenceOfElement = (array, key) =>{
    let n = array.length;
    let start = 0;
    let end = n-1;

    let mid = parseInt(start + (end - start)/2);

    while(start <= end ){
        if(array[mid] == key){
            // return `Element Present in index  ${mid}`;
            ans = mid;
            end = mid-1;
        }
        else if(key > array[mid]){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
        mid = parseInt(start + (end - start)/2);
        }
    return ans;

}

const LastOccurenceOfElement = (array, key) =>{
    let n = array.length;
    let start = 0;
    let end = n-1;

    let mid = parseInt(start + (end - start)/2);

    while(start <= end ){
        if(array[mid] == key){
            // return `Element Present in index  ${mid}`;
            ans = mid;
            start = mid+1;
            return ans;
        }
        else if(key > array[mid]){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
        mid = parseInt(start + (end - start)/2);
        }
    return ans;

}

console.log(firstOccurenceOfElement(arr, element));
console.log(LastOccurenceOfElement(arr, element));