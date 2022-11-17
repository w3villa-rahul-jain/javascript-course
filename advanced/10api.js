//  "https://api.chucknorris.io/jokes/random"

fetch("https://api.chucknorris.io/jokes/random")
.then((response) => {
    console.log(response);
})
.catch();




fetch("https://api.chucknorris.io/jokes/categories")
.then((response) => {
    return response;
})
.catch();

