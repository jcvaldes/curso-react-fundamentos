// si uso jsx tengo que importar react
import React, { Fragment } from "react";

// no esta bueno inicializar las variables es mejor hacerlo por proptypes
const PrimeraApp = ({saludo = 'hola mundo'}) => {
  // const saludo = 'Hola Mundito'
  // const saludo = '12.3'
  // const saludo = true
  // const saludo = [1, 2, 3];
  // const saludo = {
  //   nombre: 'Juan',
  //   edad: 45,
  // };
  return (
    <>
      <h1>{saludo}</h1>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>Mi primer app</p>
    </>
  );
};

export default PrimeraApp;
