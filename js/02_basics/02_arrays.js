const marvel_heros = ["thor" , "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_geros);
// console.log(marvel_heros);


// const allhero = marvel_heros.concat(dc_heros);

const allhero = [...marvel_heros , ...dc_heros];

// console.log(allhero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const  real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("vivek"))

console.log(Array.from("vivek"));

console.log(Array.from({name:"vivek"})); // interesting

let score1 = 100;
let score2 = 99;
let score3 = 98;

console.log(Array.of(score1,score2,score3));