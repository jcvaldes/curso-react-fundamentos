// agrupo logica
import React, { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = React.useState({
    data: [],
    loading: true,
  });
  // los efectos nunca pueden ser async

  useEffect(() => {
    // getGifs(category).then((imgs) => setImages(imgs));
    getGifs(category).then((imgs) => {
      // setTimeout(() => {
      setState({
        data: imgs,
        loading: false,
      });
      // }, 3000);
    });
  }, [category]); // cada vez que cambia la categoría se ejecuta el effect

  return state;
};
