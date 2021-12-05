// si no anda el intellige sense en los expect incorporar esta libreria
import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../bases/05-funciones';

describe('Pruebas en el archivo 05-funciones.js', () => {
  test('getUser debe retornar un objeto', () => {
    // Arrange
    const userTest = {
      uid: 'ABC123',
      username: 'El capo',
    };

    // Act
    const user = getUser();
    // console.log(user)
    // Assert
    // expect(userTest).toBe(user); //error trata de hacer {} === {} y esto es false
    // para comparar objetos usar toEqual
    expect(userTest).toEqual(user);
  });

  test('getUsuarioActivo debe retornar un objeto', () => {
    // Arrange
    const nombre = 'Juan';
    // Act
    const user = getUsuarioActivo(nombre);
    // console.log(user)
    // Assert
    expect(user).toEqual({
      uid: 'ABC567',
      username: nombre,
    });
  });
});
