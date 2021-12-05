describe('Pruebas en el archivo demo.test.js', () => {
  test('deben de ser iguales los strings', () => {
    // 1. inicialización: es la preparación de lo que queremos hacer
    // Arrange
    const mensaje = 'Hola mundo';

    // 2. estimulo - Act
    const mensaje2 = 'Hola mundo';

    // 3. observar el comportamiento - Assert
    expect(mensaje).toBe(mensaje2);
  });
});
