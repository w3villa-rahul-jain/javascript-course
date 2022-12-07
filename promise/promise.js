// promises


// const cart = ['shoes', 'pants', 'kurta'];

// createOrder(cart); //orderID

// // callback
// createOrder(cart, function(orderID){
//     proceedToPayment(orderID);
// }); //orderID


// const promise = createOrder(cart);

// promise.then(function (orderID){
//     proceedToPayment(orderID);
// });
// proceedToPayment(orderId);


let promise = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('Run Before'),1000)
});

promise.then(
    result =>{
        console.log(result);
        GetAfter2();
        GetAfter();
    },
    error =>console.log(error)
)

function GetAfter(){
    console.log("Get After");
}

function GetAfter2(){
    console.log("Get After2");
}


