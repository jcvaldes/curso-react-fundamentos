import React, { useState } from "react";
import PropTypes from "prop-types";
const CounterApp = ({ value }) => {
  // const state = useState('Oliver');
  // console.log(state[1]); // horrible
  // console.log(state);
  // debugger;
  // const [nombre, setNombre] = useState("Oliver");
  // console.log(nombre);

  const [counter, setCounter] = useState(value);

  const onAdd = () => {
    // si la mando a llamar en vez de obtener la referencia debo retornar otra funcion
    return () => setCounter(counter + 1);
  };
  const handleAdd = (e) => {
    // counter++; //no funciona
    // setCounter(counter++); // no funciona
    // setCounter(counter + 1);
    // otra forma de hacerlo
    setCounter((c) => c + 1);

    // console.log(e);
  };

  // const handleReset = (e) => setCounter(value);

  const handleMinus = (e) => setCounter(counter - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h3> {counter} </h3>

      {/* <button
        onClick={function () {
          console.log('hola');
        }}
      >
        +1
      </button> */}

      {/* <button
        onClick={(e) => {
          console.log(e);
        }}
      >
        +1
      </button> */}

      {/* <button
        onClick={(e) => {
          handleAdd(e);
        }}
      >
        +1
      </button> */}

      {/* si una funcion no retorna nada devuelve siempre undefined no es una práctica común */}
      <button onClick={onAdd()}>+1</button>

      <button onClick={handleAdd}>+1</button>
      {/* otra forma de hacerlo */}
      <button onClick={() => setCounter(value)}>Reset</button>

      <button onClick={handleMinus}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 10,
};

export default CounterApp;
