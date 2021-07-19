const nombre = 'Tony';
const apellido = 'Stark';

let valorDado = 4;
valorDado = 3;

console.log(nombre, apellido, valorDado);

if (true) {
  const nombre = 'Peter';
  console.log(nombre);
}

console.log(valorDado);

const apiKey = 'HHlImgO454RfiUfhwpvbVuFFRquaNQwA';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
