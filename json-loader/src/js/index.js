import '../css/estilos.css'
import { messages } from './message'
import platziImg from '../images/platzi.png'
import data from './teachers.json'
import renderToDom from './render-to-dom'

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
