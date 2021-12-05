import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

// si no anda el intellige sense en los expect incorporar esta libreria
import '@testing-library/jest-dom';

import CounterApp from '../CounterApp';
// tengo que tener el archivo setupTests.js para extender el expect
// sino toBeInTheDocument no funciona

// si uso enzyme tengo que configurar el setupTests.js para que no me de error
// siempre que hago cambios en el setupTests.js tengo que reiniciar las pruebas
describe('Pruebas en componente <CounterApp />', () => {
  let wrapper = undefined;
  // si no funciona el intelligesense entonces reemplazar la linea anterior por
  // let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    // reinicializo antes de que se ejecute cada test
    // Act
    wrapper = shallow(<CounterApp />);
  });
  test('debe de mostrar <CounterApp /> correctamente', () => {
    // similar al render pero me da opciones para simular clicks,
    // hacer queryselector, etc

    //Assert
    // realiza pruebas contra el snapshot
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar el valor por defecto de 100', () => {
    // Esta prueba me permite hacer evaluciones en el DOM

    // Arrange
    const value = 100;
    // Act
    const wrapper = shallow(<CounterApp value={value} />);
    // similar al querySelector.
    const counterText = wrapper.find('h3').text().trim();

    //Assert
    expect(counterText).toBe(value.toString());

    // realiza pruebas contra el snapshot
    // expect(wrapper).toMatchSnapshot();
  });
  test('debe de incrementar el valor cuando se presiona el boton +1', () => {
    wrapper.find('button').at(0).simulate('click');
    // console.log(wrapper.find('button').at(0).html());
    const counterText = wrapper.find('h3').text().trim();
    expect(counterText).toBe('11');
  });

  test('debe de decrementar el valor cuando se presiona el boton -1', () => {
    wrapper.find('button').at(3).simulate('click');
    // console.log(wrapper.find('button').at(3).html());
    const counterText = wrapper.find('h3').text().trim();
    expect(counterText).toBe('9');
  });
  test('debe de colocar el valor por defecto con el boton reset', () => {
    // Arrange
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    // console.log(wrapper.find('button').at(0).html());
    let counterText = wrapper.find('h3').text().trim();

    // Act
    wrapper.find('button').at(2).simulate('click');
    counterText = wrapper.find('h3').text().trim();
    expect(counterText).toBe('105');

  });
});
