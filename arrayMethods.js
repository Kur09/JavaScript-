const marvel_heros = ['Ironman','captain America','spiderMan']
const dc_heros = ['flash','Aquaman','batman']

const all_heors = [...marvel_heros,...dc_heros];

// console.log(all_heors);
// console.log(marvel_heros.concat(dc_heros));


const anotherArray = [1,2,3,[4,5,6],7,[3,7,[4,5]]]
const realanotherArray = anotherArray.flat(Infinity)

console.log(realanotherArray);


console.log(Array.isArray("Keyur"));
console.log(Array.from("keyur"));
console.log(Array.from({name:"keyur"}))