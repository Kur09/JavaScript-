

// for of

const arr = [1,2,3,4,5,5,6]

for(const val of arr){
    console.log(val)
}
//MAP
const map = new Map()

map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("FR" , "France")


for(const [key,value] of map){
    console.log(`${key} is Code for ${value}`)
}

