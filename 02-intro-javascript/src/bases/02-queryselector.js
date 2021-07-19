const nombre = 'juan'
const trabajo = 'Desarrollador web'

const contenedorApp = document.querySelector('#app')

let html = `
  <ul>
    <li>Nombre: ${nombre}</li>
    <li>Trabajo: ${trabajo}</li>
    
  </ul>
`
contenedorApp.innerHTML = html