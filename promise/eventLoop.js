// ?Event Loop


function printSomething(){
    console.log("Print1");
}

function printSomething2(){
    setTimeout(() =>{
        console.log("printSomething2");
    },1000)
}

function printSomething3(){
    setTimeout(() =>{
        console.log("printSomething3");
        // setTimeout(()=>{
        //     console.log("printSomething3");
        // },4000)
    },2400)
}

function printSomething4(){
    setTimeout(() =>{
        console.log("printSomething4");
    },1)
}

function printSomething5(){
    setTimeout(() =>{
        console.log("printSomething5");
    },2411)
}


printSomething5();
printSomething2();
printSomething3();

printSomething4();
printSomething();
console.log("End");
