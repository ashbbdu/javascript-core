


let arr1 = ["a" , "b" , "c"]
let arr2 = ["d" , "e" , "f"]

arr1.push(arr2);
const arr3 = arr1.concat(arr2) //concat does not chnage the original array so i have to make a new array
console.log(arr1);
console.log(arr3);



const arr4 = [...arr1 , ...arr2]
console.log(arr4);




console.log(Array.isArray("Ashish"));

const myobj = {
    firstName : "Ahsihs",
    lastName : "srivastava"
}

console.log();
console.log(Object.values(myobj))


const csk = 250;
const rcb = 260;
const mi = 280;

const combinedScore = Array.of(csk , rcb , mi)
console.log(combinedScore , "combined score");




