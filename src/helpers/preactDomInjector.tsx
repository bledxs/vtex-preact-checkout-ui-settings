import { render, h, FunctionalComponent } from 'preact'

interface Props {
  [key: string]: unknown
}

export function injectPreactComponent(
  Component: FunctionalComponent,
  containerSelector: string,
  className?: string,
  props?: Props
): void {
  const container = document.querySelector(containerSelector)
  if (container) {
    const div = document.createElement('div')
    if (className) {
      div.className = className
    }
    container.prepend(div)
    render(<Component {...props} />, div)
  } else {
    console.warn(`El selector "${containerSelector}" no fue encontrado.`)
  }
}
