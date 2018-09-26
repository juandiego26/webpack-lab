import renderToDOM from './render-to-dom'
import makeMessage from './make-message'

const waitTime = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Han pasado 3 segundos, omg')
  }, 3000)
})

let messages = {
  firstMessage:'Hola Mundo! desde un módulo',
  delayedMessage: async () => {
    const message = await waitTime;
    console.log(message)
    // const element = document.createElement('p')
    // element.textContent = message
    renderToDOM(makeMessage(message))
  }
}

export {messages}
