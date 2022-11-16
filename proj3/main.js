// const courses = [
//   {
//     name: "Complete React Js Course",
//     price: "2.3",
//   },
//   {
//     name: "Complete MERN Course",
//     price: "2.2",
//   },
//   {
//     name: "Complete NODE Course",
//     price: "2.5",
//   },
//   {
//     name: "Complete Angular Course",
//     price: "2.6",
//   },
//   {
//     name: "Complete Dango Course",
//     price: "4.6",
//   }
// ];

// function generateList() {
//   const ul = document.querySelector(".list-group");
//   ul.innerHTML = "";
//   courses.forEach((course) => {
//     const li = document.createElement("li");
//     li.classList.add("list-group-item");

//     const name = document.createTextNode(course.name);
//     li.appendChild(name);

//     const span = document.createElement("span");
//     const price = document.createTextNode("$ " + course.price);
//     span.appendChild(price);

//     li.appendChild(span);
//     ul.appendChild(li);
//   });
// }

// // generateList();

// window.addEventListener("load", generateList);

// const button = document.querySelector(".sort-btn");

// button.addEventListener("click", () => {
//   courses.sort((a, b) => a.price - b.price);
//   generateList();
// });


// const coursebutton = document.querySelector(".course-btn");

// coursebutton.addEventListener("click", () => {
//   courses.sort((a, b) =>  b.price - a.price );
//   generateList();
// });




const courses = [
  {
    name: "Complete React Js Course",
    price: "2.3",
  },
  {
    name: "Complete MERN Course",
    price: "2.2",
  },
  {
    name: "Complete NODE Course",
    price: "2.5",
  },
  {
    name: "Complete Angular Course",
    price: "2.6",
  },
  {
    name: "Complete Dango Course",
    price: "4.6",
  }
];

function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.slice(0,5).map((course, index) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price);

    li.appendChild(span);
    
    ul.appendChild(li);
  });
}

// generateList();

window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
});


const coursebutton = document.querySelector(".course-btn");

coursebutton.addEventListener("click", () => {
  courses.sort((a, b) =>  b.price - a.price );
  generateList();
});