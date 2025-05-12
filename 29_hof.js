let arr = [1,2,3,4,5,6];


// for of loop

for (const val of arr) {
    console.log(val);  
}

for (const val in arr) {
    // let arr = [1,2,3,4,5,6]; // for this example it will print the indexes
    console.log(val); //will print the keys
    
    // console.log(arr.at(val));   // will print the values
}



// Maps

const mp = new Map();
mp.set("a" , 1);
mp.set("b" , "hii");
mp.set("a" , 2)

// console.log(map , "map");


// for(const val of mp) {
//     console.log( "val is =>" ,  val)
// }



for(const [key , value] of mp) {
    // console.log(key , ":-" , value);
    
}


// for of is working on maps and arrays but it did not worked on Objects

let myObj = {
    "game1" : "NFS",
    "game2" : "Spider Man"
}


// for (const [key , value] of myObj) {
//     console.log(key , ":-" , value);
// }


const obj = {
    js : "Javascript",
    cpp : "C++",
    rb : "ruby",
    jv : "Java",
    sw : "Swift"
}


for (const key in obj) {
    console.log(key , " : " ,obj[key]);  
}

