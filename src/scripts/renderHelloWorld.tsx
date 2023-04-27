import { h, render } from 'preact'
import HelloWorld from './components/HelloWorld'

window.addEventListener('DOMContentLoaded', () => {
  // Inicializar htm con Preact
  const div = document.createElement('div')
  div.setAttribute('class', 'example-preact-component')
  document.querySelector('.cart-template')?.prepend(div)
  render(<HelloWorld />, div)
})
