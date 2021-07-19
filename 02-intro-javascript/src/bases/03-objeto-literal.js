

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( persona );
// clona el objeto pero en otra posicion de memoria 
const persona2 = { ...persona };
persona2.nombre = 'Peter';

const persona3 = persona

console.log( persona );
console.log( persona2 )







