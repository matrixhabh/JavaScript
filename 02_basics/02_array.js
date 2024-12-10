const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
// Output-
// [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]

console.log(marvel_heros[3][1]);
// Output-
// Batman

// marvel_heros.concat(dc_heros)
console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
// Output-
// [
//     'thor',
//     'Ironman',
//     'Spiderman',
//     [ 'Superman', 'Batman', 'Flash' ],
//     'Superman',
//     'Batman',
//     'Flash'
//   ]

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);