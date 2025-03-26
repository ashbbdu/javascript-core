// Primitive Data Type
// string , number , boolean , null , undefined , symbol , BigInt


const s1 = Symbol("abcd");
const s2 = Symbol("abcd")

console.log(s1 ===  s2);

const bigNumber = BigInt(8900989890890808098908908);
console.log(typeof bigNumber);




// Non Primitive Type or Reference Type
// Arrays , Objects , Functions


const printSomething = function () {
    console.log("Somthing is printed");
    
}

console.log(typeof printSomething);


printSomething()



const arr = [1,2,3,4];
console.log(typeof arr);
