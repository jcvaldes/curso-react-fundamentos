import React from 'react';

import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
  const title = 'mi titulo';
  const url = 'http://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test('debe de mostrar el GifGridItem', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de tener un parrafo con el title', () => {
    // similar a jquery busca por selector o clases o tags
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });
  test('debe de tener la imagen igual al url y alt de los props', () => {
    // similar a jquery busca por selector o clases o tags
    const img = wrapper.find('img');
    // console.log(img.props().src);
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });
  test('debe de tener animate__fadeIn', () => {
    // similar a jquery busca por selector o clases o tags
    const div = wrapper.find('div');
    // console.log(div.props)
    const className = div.prop('className');
    // console.log(className)
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});

