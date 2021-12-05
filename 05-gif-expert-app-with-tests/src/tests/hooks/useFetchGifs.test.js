import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
  test('debe de retornar el estado inicial',  () => {
    // error debo instalar el paquete @testing-library/react-hooks
    // const { data, loading } = useFetchGifs('One Punch');
    // const resp = renderHook(() => useFetchGifs('One Punch'));
    // console.log(resp)

    // se dispara el efecto cuando se ejecuta esta prueba por que uso useFeatchGifs

    const { result } = renderHook(() => useFetchGifs('One Punch'));

    const { data, loading } = result.current;
    // console.log(data, loading )
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe de retornar un arreglo de imgs y el loading en false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
    // espera a que  cambie el estado en useFetchGifs
    await waitForNextUpdate();
    const { data, loading } = result.current;
    // console.log(data, loading )
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
