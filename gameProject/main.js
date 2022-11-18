const cards = document.querySelectorAll(".flip");
console.log(cards);

// variables

var isFlipped = false;



cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  this.classList.add("swap-image");
  if(!isFlipped){
      isFlipped = true;
  }
  
}

// toggle.addEventListener("click", ()=>{
//     toggle.classList.toggle('swap-image');
// })
