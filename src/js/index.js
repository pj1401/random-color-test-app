import { RandomColor } from './components/random-color'

const randomColor = new RandomColor()
randomColor.randomize()

const h2Element = document.createElement('h2')
h2Element.textContent = 'Random color!'
h2Element.style.backgroundColor = randomColor.getHsl()
document.querySelector('body').append(h2Element)
