


var getUserRole =  (name, role) => {
    switch (role){
        case "admin":
            return `${name} is Admin with all Access`
            break;
        case "subadmin":
            return `${name} is Subadmin with  access to create and delete courses`
            break;
            
        case "user":
            return `${name} is a user consume content`
            break; 

        default: 
            return
            break;    

    }
}


console.log(getUserRole("Rahul", "admin"));