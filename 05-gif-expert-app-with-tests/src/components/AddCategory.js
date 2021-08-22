import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log('handleInputChange llamado');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit', inputValue);
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      // poner para probar el test unitario
      // setCategories(122);
      // limpio la caja de texto
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
