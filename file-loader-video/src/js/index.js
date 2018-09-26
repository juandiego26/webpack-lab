import '../css/estilos.css'
import { messages } from './message'
import platziImg from '../images/platzi.png'
import videoPlatzi from '../video/que-es-core.mp4'

document.write(messages.firstMessage)
messages.delayedMessage()

const img = document.createElement('img') //creamos el elemento
img.setAttribute('src', platziImg) // definimos el atributo para el elemento
img.setAttribute('width', 50) // definimos el atributo para el elemento
img.setAttribute('height', 50) // definimos el atributo para el elemento
document.body.append(img) // imprimos en pantalla

const video = document.createElement('video') //creamos el elemento
video.setAttribute('src', videoPlatzi) // definimos el atributo para el elemento
video.setAttribute('width', 480) // definimos el atributo para el elemento
video.setAttribute('autoplay', true) // Para darle autoplay al video
video.setAttribute('controls', true) // Controles del reproductor
document.body.append(video) // imprimos en pantalla

// console.log('Hola mundo!, desde webpack modifify-1')
console.log('Hola mundo!, desde webpack en un webpack.config.js')
