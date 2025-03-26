// ***************** Stack Memory ********************

// used for Primitive Data Type
// will give a copy of the value and wont impact the original value


// ***************** Heap Memory ********************

// used for Non Primitive Data Type
// will give a refrence and on any change it will change the origin value

let myname = "ashish";
let anotherName = myname;


anotherName = "test";
console.log(myname);

console.log(anotherName);


let user1 = {
    email : "user@google.com",
    upi : "user@ybl"
}


let user2 = user1;
user2.email = "ashish@google.com";


console.log(user1);
console.log(user2);

