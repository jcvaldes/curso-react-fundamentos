// si no anda el intellige sense en los expect incorporar esta libreria
import '@testing-library/jest-dom';

import { getHeroeById } from '../bases/08-imp-exp';
import heroes from '../data/heroes';
import { getHeroesByOwner } from '../bases/08-imp-exp';

describe('Pruebas en el archivo 08-imp-exp.js', () => {
  test('getHeroeById debe encontrar un heroe por id', () => {
    // Arrange
    const id = 1;
    const heroe = getHeroeById(id);

    // Act
    const heroeFound = heroes.find((h) => h.id === id);

    // Assert
    expect(heroe).toEqual(heroeFound);
  });
  test('getHeroeById debe retornar undefined si el heroe no existe', () => {
    // Arrange
    const id = 10;
    const heroe = getHeroeById(id);

    // Assert
    expect(heroe).toBe(undefined);
  });
  // Tarea
  test('getHeroesByOwner debe de retornar un arreglo con heroes de DC', () => {
    // Arrange
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    // console.log(heroes);
    // Act
    const heroesFound = heroes.filter((heroe) => heroe.owner === owner);

    // Assert
    expect(heroes).toEqual(heroesFound);
  });
  // Tarea
  test('getHeroesByOwner debe de retornar un arreglo con heroes de Marvel', () => {
    // Arrange
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    // console.log(heroes);
    // Act
    const heroesFound = heroes.filter((heroe) => heroe.owner === owner);

    // Assert
    expect(heroes).toEqual(heroesFound);

    // debe de tener 2 elementos el array
    expect(heroes.length).toBe(2);
    expect(heroes).toHaveLength(2);
  });
  // Tarea
  test('getHeroesByOwner debe de retornar undefined si tiene un owner que no existe', () => {});
});
