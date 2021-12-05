// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';

import heroes, { owners } from "./data/heroes";



// console.log( owners );


// export const getHeroeById = (id) => heroes.find( (heroe) => {
//   if (heroe.id === id) {
//     return true
//   } else {
//     return false
//   } 
// });


export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


