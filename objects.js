// // singleton 

// // object literals

// const mySym = Symbol("key1")
// const JsUser = {
//     name: "Keyur",
//     age:23,
//     [mySym] : "key1",
//     location:"Karnataka",
//     email:"keyur@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays:["Mondays", "Saturday"]
// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

// //Object.freeze(JsUser)

// JsUser.age = 18
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello Js User");
// }

// JsUser.greetingTwo = function(){
//     console.log(`Hello Js user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());




//de structure 
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables
const course ={
    courseName : 'js',
    price: 999,
    courseInstructor:'hitesh'

}
const {courseInstructor:Instructor} = course

console.log(courseInstructor)
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
