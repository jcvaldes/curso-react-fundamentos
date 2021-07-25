
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

// OJO con esto cuando retorno un objeto lo encierro en parentesis
export const getUser = () => ({
    uid: 'ABC123',
    username: 'El capo'
});

// Tarea
export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})






