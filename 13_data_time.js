let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());



console.log(typeof myDate);

 
// let myNewDate = new Date(2023 ,  0 , 23); // month starts with 0
let myNewDate = new Date("01-02-2024")
console.log(myNewDate.toString());


console.log("Timestamp");


let mytimeStamp = Date.now();
console.log(mytimeStamp); // from Jan 01 , 1970 (check MDN) in milliseconds
console.log(mytimeStamp.toExponential());
console.log(mytimeStamp.toFixed());
console.log(mytimeStamp.toLocaleString());
console.log(mytimeStamp.toPrecision());
console.log(mytimeStamp.toString());


console.log(myNewDate.getTime());




// convert milliseconds to seconds , but make sure while comparing use milliseconds
console.log(Math.floor(Date.now()/1000));



let newDate = new Date("01-02-2024");
console.log(newDate);

console.log(newDate.getDate());
console.log(newDate.getMonth());


newDate.toLocaleString('default' , {
    weekday : "narrow",
    day : "2-digit"
})

console.log(newDate);


