// si no anda el intellige sense en los expect incorporar esta libreria
import '@testing-library/jest-dom';

import { getSaludo } from '../bases/02-template-string';

describe('Pruebas en el archivo 02-template-string.test.js', () => {
  test('getSaludo debe retornar hola Juan Carlos!', () => {
    // Arrange
    const nombre = 'Juan Carlos';

    // Act
    const saludo = getSaludo(nombre);

    // Assert
    expect(saludo).toBe('Hola ' + nombre + '!');
  });
  test('getSaludo debe retornar hola Carlos! si no hay argumentos en el nombre', () => {
    // Arrange
    const nombre = 'Carlos';

    // Act
    const saludo = getSaludo();

    // Assert
    expect(saludo).toBe('Hola ' + nombre + '!');
  });
});
