// si uso jsx tengo que importar react
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// const PrimeraApp = ({ saludo, subtitulo = 'soy un subtitulo' }) => {
const PrimeraApp = ({ saludo, subtitulo }) => {
  // if (!saludo) {
  //   throw new Error("Error: saludo no está definido");
  // }
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};
PrimeraApp.defaultProps = {
  subtitulo: 'soy un subtitulo',
};
export default PrimeraApp;
