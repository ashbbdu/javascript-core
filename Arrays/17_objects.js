


// const user = new Object();
const user = {};
// the only difference is the first obj is singleton and the last one is non-singleton



user.id = "123d",
user.name = "Sammy",
user.isLoogedIn = false

console.log(user);


const anotherUser = {
    email : "anotheruser@gmail.com",
    fullName : {
        userfullName : {
            firstName : "Ashish",
            lastName : "Srivastava"
        }
    }
}

const combine = Object.assign({} , user , anotherUser)
console.log(combine);


console.log(Object.keys(anotherUser.fullName));
console.log(Object.values(anotherUser));

console.log(anotherUser.haso)





