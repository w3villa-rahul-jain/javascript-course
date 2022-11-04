var user = "testprep";

switch (user){
    case "admin":
        console.log("You get full Access");
        break;
    case "subadmin":
        console.log("You get full Access");
        break;
    case "testprep":
        console.log("You get some Access");
        break;
    case "user":
        console.log("You get full Access");
        break;
    default:
        console.log("Trial User");
        break;    
}
