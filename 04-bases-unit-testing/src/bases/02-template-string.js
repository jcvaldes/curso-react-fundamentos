


const nombre   = 'Juan Carlos';
const apellido = 'Valdés';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );

// para hacer test tengo que exportarlo
export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre + '!';
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
