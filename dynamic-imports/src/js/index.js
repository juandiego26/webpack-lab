// dependencias
import React from 'react'
import { render } from 'react-dom'

//modulos
import { messages } from './message'
import Teachers from './components/teachers'
import renderToDom from './render-to-dom'

//assets
import platziImg from '../images/platzi.png'
import data from './teachers.json'
import '../css/estilos.css'
import '../css/main.less'

const $button = document.getElementById('dynamic-import')

$button.addEventListener('click', async () => {
  const { default: alerta } = await import('./alerta.js')
  alerta()
})

// para imprimirlo en el navegador con el método render
render(<Teachers data={data} />, document.getElementById('container'))

console.log(data)

data.teachers.forEach((teacher) => {
  const element = document.createElement('li')
  element.textContent = teacher.name
  renderToDom(element)
})

document.write(messages.firstMessage)
messages.delayedMessage()

const img = document.createElement('img') //creamos el elemento
img.setAttribute('src', platziImg) // definimos el atributo para el elemento
img.setAttribute('width', 50) // definimos el atributo para el elemento
img.setAttribute('height', 50) // definimos el atributo para el elemento
document.body.append(img) // imprimos en pantalla

// console.log('Hola mundo!, desde webpack modifify-1')
console.log('Hola mundo!, desde webpack en un webpack.config.js')
