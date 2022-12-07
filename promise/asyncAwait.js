


function Clown(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Resolve');
        },3000)
    })
}

function Clown2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Resolve 2');
        },2000)
    })
}
 
async function msg(call2, call1 ){
    const msg2 =  await Clown2();
    console.log('Message', msg2);
    call2(); 
    const msg =  await Clown();
    console.log('Message', msg);
    call1();
}

msg(clown2After, clown1After);

function clown2After(){
    console.log('clown 2 After');
}

function clown1After(){
    console.log('clown 1 After');
}



