/* 
* Primitive => 7 type : String , Number , Boolern, Null , undefined , Symbol, BigInt
========================================================================
* Non Primitive => Array, Objects , Fucantinos
*/


// ===================Primitive=========================

const score = 100;
const scoreValue = 100.33;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber =  5486465456466565n;


// ========================Non Primitive==============================

const heros = ["Shaktiman" , "naagraj", "doga"]

// let myobj  = {
//     name : "vivek",
//     age  : 22,
// }

const myFuction = function(){
    // console.log("Hello World");
}


//================================Stack(Primitive),Heap(Non-Primitive)====================================

let myName = "Vivek";

let anotherName = myName;
anotherName = "Test"

// console.log(myName);
// console.log(anotherName);

let user  = {
    name : "vivek",
    age  : 22,
}

let userTwo = user

userTwo.name = "Demo"

console.log(user.name);
console.log(userTwo.name);