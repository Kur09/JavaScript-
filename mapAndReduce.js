const newNumb= [1,2,3,4,5,5,6,7,8]

// const newVal = newNumb.map(function(item){
//     return item+10

// })

// console.log(newVal)

const newVal = newNumb.
                map((item)=>{return item*10})
                .map((item)=> item+1 )

console.log(newVal)