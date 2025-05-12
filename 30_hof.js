let programmingLanguages = ["Javascript" , "C++" , "Ruby", "Java" , "Swift"];


let newarr = programmingLanguages.map(res => res == "Java")
// let newArr = programmingLanguages.filter(res  => res === "Java")
console.log(newarr);
// console.log(newArr);



const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter(res => res > 5)

const newNums = myNums.filter(res => {
    return res > 5
})

console.log(newNums);


// using for each

let newNumsArr = [];

myNums.forEach(res => {
    if(res > 5) {
        newNumsArr.push(res);
    }
})


console.log(newNumsArr , "newNumsArr");




const doubleMap =  myNums.map(res => res * 10).map(res => res + 1);
console.log(doubleMap , "doublemap");




// const val =  myNums.reduce((prev , next) => prev + next , 0)
const val =  myNums.reduce((prev , next) => {
    return prev + next
},0)

console.log(val , "val");
