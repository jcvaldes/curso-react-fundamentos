import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
// ruta original
import { useFetchGifs } from '../../hooks/useFetchGifs';

// creo un mock de la funcion useFetchGifs basado en el componente real
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';
  test('debe de mostrar el GifGrid correctamente', () => {
    // datps falseados para simular el retorno de datos
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [
      { id: 'ABC', title: 'cualquier cosa', url: 'https://localhost/mock.jpg' },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
