function bar(){
    return{
        bar: "First"
    }
}

function foo(){
    return
    {
        bar: "First"
    }
}

console.log(`${JSON.stringify(bar())}`);
console.log(`${JSON.stringify(foo())}`);