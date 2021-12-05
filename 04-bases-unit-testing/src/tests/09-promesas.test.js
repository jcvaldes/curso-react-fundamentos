// si no anda el intellige sense en los expect incorporar esta libreria
import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../bases/09-promesas';
import heroes from '../data/heroes';

describe('Pruebas en el archivo 09-promesas.js', () => {
  // test('getHeroeByIdAsync debe de retornar un heroe async', () => {
  //   // Arrange
  //   const id = 1;
  //   // eslint-disable-next-line jest/valid-expect-in-promise
  //   getHeroeByIdAsync(id).then((heroe) => {
  //     // si bien deberia fallar es porque hace las pruebas sincronas
  //     expect(true).toBe(false);
  //   });
  //   // Act

  //   // Assert
  // });
  test('getHeroeByIdAsync debe de retornar un heroe async', (done) => {
    // Arrange
    const id = 1;
    // Act
    getHeroeByIdAsync(id).then((heroe) => {
      // Assert
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test('getHeroeByIdAsync debe de obtener un error si el heroe por id no existe', (done) => {
    const id = 12;
    // Act
    getHeroeByIdAsync(id).catch((error) => {
      // Assert
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
