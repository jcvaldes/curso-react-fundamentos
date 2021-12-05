// si no anda el intellige sense en los expect incorporar esta libreria
import '@testing-library/jest-dom';
import { getImagen } from '../../../033-counter-app/src/base/11-async-await';

describe('Pruebas en el archivo 11-async-await.js y fetch', () => {
  test('debe de retornar la url de la imagen', async() => {
    // Arrange
    const url = await getImagen();
    // Assert
    expect(typeof url).toBe('string');
    expect(url.includes('https://')).toBe(true);
  });
});
