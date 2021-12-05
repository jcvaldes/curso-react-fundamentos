import React from 'react';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

// si no anda el intellige sense en los expect incorporar esta libreria
import '@testing-library/jest-dom';

import PrimeraApp from '../PrimeraApp';
// tengo que tener el archivo setupTests.js para extender el expect
// sino toBeInTheDocument no funciona

// si uso enzyme tengo que configurar el setupTests.js para que no me de error
// siempre que hago cambios en el setupTests.js tengo que reiniciar las pruebas
describe('Pruebas en componente <PrimeraApp />', () => {
  // test('debe de mostrar el mensaje "Hola, soy jarvis"', () => {
  //   // Arrange
  //   const saludo = 'Hola, soy jarvis';

  //   // Act
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //   //Assert
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });
  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    // similar al render pero me da opciones para simular clicks,
    // hacer queryselector, etc
    // Arrange
    const saludo = 'Hola, soy Tony Stark';

    // Act
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    //Assert
    // realiza pruebas contra el snapshot
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de mostrar el subtitulo enviado por props', () => {
    // Esta prueba me permite hacer evaluciones en el DOM

    // Arrange
    const saludo = 'Hola, soy Tony Stark';
    const subtitulo = 'soy un subtitulo2';

    // Act
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />,
    );
    // similar al querySelector.
    const subtituloParrafo = wrapper.find('p').text();

    //Assert
    expect(subtituloParrafo).toBe(subtitulo);

    // realiza pruebas contra el snapshot
    // expect(wrapper).toMatchSnapshot();
  });
});
