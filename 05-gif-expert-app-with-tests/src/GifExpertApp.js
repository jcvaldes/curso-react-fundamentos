import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(defaultCategories);
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
      {/* {JSON.stringify(categories)} */}
      <AddCategory setCategories={setCategories} />
      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {/* {categories.map((category) => {
          return <li key={category.id}>{category}</li>;
        })} */}
        {/*
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))} */}

        {categories.map((category, i) => (
          <GifGrid key={i} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
