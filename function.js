// // Defination
// //A JavaScript function is a reusable block of code designed to perform a specific task,
// // taking parameters, executing statements, and returning values.


// function addTwoNumber(number1, number2) {

//     return number1 + number2
// }

// function userLogin(userName) {
//     return `${userName} just logged in`
// }

// console.log(userLogin("keyur"))


// //rest Operator

// //the rest parameter compresses them. It collects several elements. 
// //In functions when we require to pass arguments but were not sure how many we have to pass,
// // the rest parameter makes it easier.  

// function calculateCartPrices(value) {
//     console.log(value)
// }

// calculateCartPrices(200, 300, 500)


// //Arrow Function:
// // () => {}

// const one = () =>{
//     let userName = "Keyur"
//     console.log(this.userName)
// }

// // const addTwo = (num1,num2)=>{
// //     return num1+num2
// // }

// // const addTwo = (num1,num2) =>  num1+num2

// // const addTwo = (num1,num2) =>  (num1+num2)

// const addTwo = (num1,num2) =>  ({username : "keyur"})


// console.log(addTwo(5,7))


//IIEF
// this function are executed immediatley after they are defined. they are 
// they used to create a local scope for variables to prevent them from polluting the global scope.

// (function connection(){
//     //Name IIEF
//     console.log(`DB is Connected`);
// })();



// ((name) => console.log(`${name} IS Connected To DB`))('Keyur');



// Hoisting funciton and variables


greeting(); 
console.log(x)
//console.log(y)
//console.log(z)

var x = 1;
let y = 2;
const z = 3;
function greeting() {
  console.log("Hello world");
}