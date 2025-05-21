class Person {
    constructor (name , age) {
        this.name = name;
        this.age = age;
    }

    greet () {
        console.log(`Hi , my name is ${this.name}`);
        
    }
}

// class Ash extends Person {

// }


const p1 = new Person("ashish" , 21);
console.log(p1);
