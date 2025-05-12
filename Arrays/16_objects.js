// singleton



// object literals

const mySym = Symbol("Key1")

const user = {
    name : "Ashish",
    "full Name" : "Ashish Srivastava",
    age : 18,
    // mySym : "Key1",
    [mySym] : "Key1",
    location : "Lucknow",
    email : "ashish@google.com",
    isLoogedIn : true,
    greeting : function () {
        console.log("Hello , Good Morning !");
        
    },
    greetingtwo : function () {
        console.log(`Hello ${this["full Name"]} , Good Morning !`);
        
    }
}

// console.log(user["full Name"]);
// console.log(user["name"]);
// console.log(typeof user.mySym); //wrong way
// console.log(user[mySym]);

// console.log(typeof user[mySym]);


user.age = 21;


user.greeting();
user.greetingtwo();

Object.freeze(user);

user.isLoogedIn = false;


// console.log(user);

