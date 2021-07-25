// si no anda el intellige sense en los expect incorporar esta libreria
import '@testing-library/jest-dom';
import { usContext } from '../bases/06-deses-obj';
import { retornaArreglo } from '../bases/07-deses-arr';

describe('Pruebas en el archivo 07-deses-arr.js', () => {
  test('debe de retornar un arreglo con un string y un número', () => {
    // Arrange
    // const arr = retornaArreglo()
    // Act
    // Assert
    // expect(arr).toEqual(['ABC', 123]);

    // Arrange
    const [letras, numeros] = retornaArreglo();
    // Act
    // Assert
    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe('number');


  });
});
