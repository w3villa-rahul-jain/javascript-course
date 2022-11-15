const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");


// window.getComputedStyle

console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor
}
var color = getBGColor(orange);




const magicColorChanger = (element, color) =>{
  element.addEventListener('mouseenter', ()=>{
    center.style.background =  color; 
  } )
}


magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));


// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   }
  
//   genNew.addEventListener("click", setBg);
//   setBg();



// var counter = document.querySelector(".counter");
// var followers = document.querySelector(".followers");

// let count = 1;

// setInterval(()=>{
//   if(count < 1000){

//     count++;
//     counter.innerText = count;
//   }
// },1)

// setTimeout(()=>{
//   followers.innerText = "Followers on Instagram!"
// },3000)

