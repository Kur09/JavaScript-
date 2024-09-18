// const promiseOne = new Promise(function(resolve, reject){

//     // Do an sync task
//     // DB calls, cryptographty, network

//     setTimeout(function(){

//         console.log('Async task is compelete');
//         resolve()
//     },1000)
    
// })

// promiseOne.then(function(){
//     console.log("promise Consumed")
// })


// const promiseThree = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         resolve({username:"kur",email:"keyur27@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true

//         if(!error){
//             resolve({username:"keyur",password:"123"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//      console.log(user);
//      return user.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=> console.log("Finally Promise is either resolved or rejected"))
 



// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false

//         if(!error){
//             resolve({username:"javaScript",password:"123"})
//         }else{
//             reject('ERROR: Js went wrong')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//    try {
//     const userData = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const data = await userData.json();
//     console.log(data);
//     const response =  await promiseFive
//    console.log(response);
//    } catch (error) {
//     console.log(error);
//    }
// }

// consumePromiseFive()


// function doSomething() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const result = 'result from doSomething';
//         resolve(result);
//       }, 1000);
//     });
//   }
  
//   function doSomethingElse(result) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const newResult = 'result from doSomethingElse';
//         resolve(newResult);
//       }, 1000);
//     });
//   }
  
//   function doThirdThing(newResult) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const finalResult = 'result from doThirdThing';
//         resolve(finalResult);
//       }, 1000);
//     });
//   }
  

//   async function foo() {
//     try {
//       const result = await doSomething();
//       const newResult = await doSomethingElse(result);
//       const finalResult = await doThirdThing(newResult);
//       console.log(`Got the final result: ${finalResult}`);
//     } catch (error) {
//       failureCallback(error);
//     }
//   }
  
//   foo();  // Call the async function
  


const p = new Promise((res, rej) => {
    res(1);
  });
  
  async function asyncReturn() {
    return p;
  }
  
  function basicReturn() {
    return Promise.resolve(p);
  }
  
  console.log(p === basicReturn()); // true
  console.log(p === asyncReturn()); // false
  