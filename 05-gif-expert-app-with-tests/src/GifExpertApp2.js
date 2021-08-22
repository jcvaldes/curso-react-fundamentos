import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball',
  ]);
  // const handleAdd = () => {
  //   // no debo mutarlo
  //   // categories.push("HunterXHunter");

  //   // setCategories(['HunterXHunter', ...categories]);
  //   setCategories((cats) => [...cats, 'HunterXHunter']);
  // };
  return (
    <>
      <h2>GifExpertAp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {/* {categories.map((category) => {
          return <li key={category.id}>{category}</li>;
        })} */}

        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
