import {h, Component} from 'composi'
import {title} from './components/title'
import {Clock} from './components/clock'

title.state = 'Composi Canvas Clock'



// Create clock instance:
const clock = new Clock({
  container: 'section',
  size: 250,
  width: 250,
  standard: 'normal',
  hourFormat: "roman"
})
// Start Clock:
clock.update()
