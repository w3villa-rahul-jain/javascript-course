const user = [
    {
        id: 1,
        name: "Rahul"
    },
    {
        id: 2,
        name: "Dipesh"
    }
] 

const comment = [
    {
        id: 1,
        userID: 2,
        message: "simple comment 1"
    },
    {
        id: 2,
        userID: 1,
        message: "simple comment 2"
    },
    {
        id: 3,
        userID: 1,
        message: "simple comment 3"
    },
    {
        id: 4,
        userID: 1,
        message: "simple comment 4"
    },
    {
        id: 5,
        userID: 2,
        message: "simple comment 5"
    }
]



// const userOutput = user.map((userData)=>{
//     return userData;
// })

// const commentOutput = comment.map((commentData)=>{
//     return commentData;
// })

// console.log(userOutput)
// console.log(commentOutput)
// console.log(comment)
// console.log(user)

for(let i=0;i<user.length;i++){
    user[i].message = [];
    for(let j=0;j<comment.length;j++){
        if(user[i].id == comment[j].userID){
            // console.log(user[i], comment[j].message);
            // user[i].message =
            
            
            user[i].message.push(comment[j].message);
            // console.log(user[i])
        }
    }
}

console.log(user)


// for(let i=0;i<user.length;i++){
//     for(let j=0;j<comment.length;j++){
//         if(user[i].id == comment[j].userID){
//             console.log(user[i], comment[j].message);  
//         }
//     }
// }












// console.log(user);
// console.log(comment);