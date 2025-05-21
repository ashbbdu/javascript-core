

let a =10;
let b =20;
let c = "hello";
let d = {firstName : "Ashish" , lastName : "Srivastava"}


let e ;

console.table([a , b ,c ,d ,e])




class BankAccount {
    constructor (name , balance) {
        this._name = name;
        this._balance = balance;
    }

    getBalance () {
        return this._balance;
    }

    setBalance (amount) {
        this._balance = this._balance + amount ;
    }

}


let person1 = new BankAccount("Ashish" , 5000000000000000);
console.log(person1.getBalance())
person1.setBalance(1)

console.log(person1.getBalance())