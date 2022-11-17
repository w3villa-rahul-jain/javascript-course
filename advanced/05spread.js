var returnMaxValue = Math.max(2,3,4,54,5,6);

console.log(returnMaxValue);


var myObj  = {}

const value = Object.assign(myObj, {a:1,b:2},{z:9,y:8})
console.log(value);


function sumOne(b,c,...a){
    let multi = c*b;
    let sum =0;

    for(const arg of a){
        sum += arg; 
    }    
    return [multi,sum];
}

let arr = [5,10,2,3,4]

console.log(sumOne(1,2,3,4,5));
