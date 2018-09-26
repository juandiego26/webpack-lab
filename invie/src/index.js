import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cheet from 'cheet.js'
import registerServiceWorker from './registerServiceWorker';
// import './index.css';
import Invie from './Invie';
import './css/invie.css';
import './css/animations.css'
// assets
import logoPortada from './images/invie.png'
import logoPlatzi from './images/platzi.png'
import acustica from './images/invie-acustica.png'
import classic from './images/invie-classic.png'
import easterA from './images/easter-a.png'
import easterB from './images/easter-b.png'

const initialState = {
  isAnimated: false,
  menu: [
    {
      href: 'index.html',
      title: 'Home'
    },
    {
      href: '#guitarras',
      title: 'Guitarras'
    },
    {
      href: 'precios.html',
      title: 'Precios'
    },
    {
      href: 'hola.html',
      title: 'Don\'t click me!'
    }
  ],

  logoPortada: logoPortada,

  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acústica',
      features: [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio'
      ]
    },
    {
      image: classic,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo vintage',
        'Liviana',
        'Inicia tu camino como rockstar'
      ]
    }
  ]
}
// funcion reducer recibe cambios (cambia, esto, borra esto...)
function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props // datos de la acción
      return {...state, ...newProps}
    }
    default:
      return state
  }
}

const store = createStore(reducer, initialState)

const easter = {
  isAnimated:'is-animated',
  menu: [

  ],
  logoPortada: logoPlatzi,
  guitarras: [
    {
      image: easterA,
      alt: 'Guitarra padre de familia',
      name: 'Invie Familiar',
      features: [
        'Lista para copiar a los Simpsons',
        'Aire puro',
        'Chistes malos'
      ]
    },
    {
      image: easterB,
      alt: 'Guitarra padre de familia',
      name: 'Invie Anime',
      features: [
        'Estilo vintage',
        'Liviana',
        'Inicia tu camino como rockstar'
      ]
    }
  ]
}

cheet('i n v i e', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  })
  // console.log('lo lograste, descubriste el easter eeg')
})

cheet('g o b a c k', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState
    }
  })
  // console.log('regresaste al estado inicial')
})

ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById('root'));
  registerServiceWorker();
