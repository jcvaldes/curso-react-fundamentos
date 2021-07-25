// si no anda el intellige sense en los expect incorporar esta libreria
import '@testing-library/jest-dom';
import { usContext } from '../bases/06-deses-obj';

describe('Pruebas en el archivo 06-deses-obj.js', () => {
  test('usContext debe retornar un objeto', () => {
    // Arrange
    const persona = {
      nombre: 'Tony',
      edad: 45,
      clave: 'Ironman',
    };
    // Act
    const context = usContext(persona);
    // Assert
    expect(context).toHaveProperty('latlng');

  });
});
