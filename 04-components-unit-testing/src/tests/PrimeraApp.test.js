import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
// tengo que tener el archivo setupTests.js para extender el expect
// sino toBeInTheDocument no funciona
describe('Pruebas en componente <PrimeraApp />', () => {
  test('debe de mostrar el mensaje "Hola, soy jarvis"', () => {
    // Arrange
    const saludo = 'Hola, soy jarvis';

    // Act
    // const wrapper = render(<PrimeraApp saludo={saludo}/>);

    // Assert
    // expect(wrapper.getByText(saludo)).toBeInTheDocument();

    // lo mismo pero desestructurando
    // Act
    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //Assert
    expect(getByText(saludo)).toBeInTheDocument();
  });
});
