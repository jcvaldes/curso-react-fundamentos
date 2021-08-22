import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  // no puedo saber si se llamo ni con que argumentos se hizo
  // const setCategories = () => {};
  // con jest puedo saber si la funcion se llamo, cuantas veces fue llamada y mucho mas
  const setCategories = jest.fn();
  // si en wrapper veo el intellinge sense entonces no hace falta esta doble inicializacion
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    // limpio los mocks
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  })
  test('debe de mostrar el AddCategory correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'hola mundo';

    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });
  test('No debe de postear la información con submit', () => {
    const form = wrapper.find('form');
    // form.simulate('submit', { preventDefault: () => {} });
    // forma corta
    form.simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    // 1. simular inputChange
    const input = wrapper.find('input');
    const value = 'hola mundo';
    input.simulate('change', { target: { value } });

    // 2. simular submit
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() {} });

    // 3. setCategories se debe de llamar
    expect(setCategories).toHaveBeenCalled();

    // puedo pasarle como argumento para saber la cantidad de veces que se llamó
    expect(setCategories).toHaveBeenCalledTimes(1);
    // espera que se haya llamado con una funcion
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // 4. el valor del input debe de estar vacio
    expect(input.prop('value')).toBe('');

  });
});
