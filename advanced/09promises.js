const uno = () => {
    return "i am first";
  };
  
//   const dos = () => {
//     setTimeout(() => {
//       return "wooooo";
//     }, 3000);
//     // console.log("i am second");
//   };

  const dos = () => {
   return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve("i am two");
      },3000)
   });
  };
  
  const tres = () => {
    return "i am three";
  };

const callMe = async () =>{
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}; 

callMe();
  