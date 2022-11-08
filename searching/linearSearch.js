const arr = [1,35,32,4,51,61,7,85,9];
const val = 10;

const linearSearch = (array, value) =>{
    for(let i=0;i<array.length;i++){
        if(array[i] == value ){
            console.log("Found")
            return value;
        }
    
    }
    return 0;

}

console.log(linearSearch(arr, val));