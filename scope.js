// var c = 300

// {
// let a = 10
// const b = 20
// var c = 30
// }

// // console.log(a)
// // console.log(b)
// console.log(c)


// 

// function one(){

//     const userName = "Keyur"

//     function two(){
//         const website = "github"
//         console.log(userName)
//     }

//     // console.log(website)

//     two()
// }
// one()


// Closure

// closure gives you access to the outer function scope from an inner function 

function outer(name){
    //const name = "Keyur"

    return function(){
        console.log(`${name}`)
    }

}

outer("Keyur")()


//This keyword  it will be refer to the current contest of program or current object .

const user = {
    userName:"Keyur",
    price:900,

    welcomeMessage:function(){
        console.log(`${this.userName}, Welcome to Website`)
    }
}

user.welcomeMessage();
user.userName = "Sam"
user.welcomeMessage()
console.log(this)