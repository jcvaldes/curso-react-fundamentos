import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  test('debe de mostrar el GifExpertApp correctamente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar una lista de categorias', () => {
    const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const wrapper = shallow(<GifExpertApp  defaultCategories={categories}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
