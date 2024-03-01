import {
  initialLoad as initialLoadCart,
  orderFormUpdate as orderFormUpdateCart,
  stepStart as stepStartCart,
} from './modules/cart'
// Importaciones similares para otros módulos...

// Objeto para mapear hash a funciones de módulo
const hashFunctionMap = {
  '#/cart': stepStartCart,
  // Agrega entradas similares para otros módulos...
}

document.addEventListener('DOMContentLoaded', (_e: Event) => {
  initialLoadCart(_e)
})

$(window).on('orderFormUpdated.vtex', (_: unknown, orderForm: OrderForm) => {
  orderFormUpdateCart(orderForm)
  // orderFormUpdateEmail(orderForm);
  // Y así sucesivamente para otros módulos...
})

window.addEventListener('hashchange', () => {
  const hash = window.location.hash
  const hashFunction = hashFunctionMap[hash]
  if (hashFunction) {
    hashFunction()
  }
})
