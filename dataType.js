"use strict"; //  treat ll JS code as newer version

let name = "Keyur"
let age = "23"
let isLoggedIn = false

// number  => 2 to the power of 53
//bigInt
// string 
// boolean => true/false;
//NULL => standalone value;
//undefine => not assign any value


//console.log(typeof undefined); // undefined
// console.log(typeof null);// object;



//Primitive

// 7 types : String, NUmber, Boolean, null,undefined, Symbol,BigInt

// Dynamic type language

// Reference (Non primitive)
// Array, Objects, Functions

    const heros = ["shaktima", "naagraj", "doga"];
    let myObj = {
        name: "Keyur",
        age: 23
    }
const myFunction  = function(){
    console.log("Hello Keyur");
}

console.log(typeof heros); // object

///++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive) ==> copy, Heap(Non-Primitive) => reference 

let myName = "Keyur"

let anotherName = myName;
anotherName = "Ninama"

// console.log(anotherName)
// console.log(myName);

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "keyur@gmail.com"


// console.log(userOne.email);
// console.log(userTwo.email);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// String


const fname = "keyur"
const repoCout = 50

// console.log(`Hello my name is ${fname} and my repo count is ${repoCout}`)


const gameName = new String('kninama')

// console.log(gameName[0])
// console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));