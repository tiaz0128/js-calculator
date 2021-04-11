import { calculatorTemplate } from '../template/calculatorTemplate.js'

export function Calculator({ $calculatorDom, initState }) {
  const init = () => {
    this.state = initState

    $calculatorDom.innerHTML = calculatorTemplate
    this.$totalDom = document.querySelector('#total')

    this.render()
  }

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    this.$totalDom.innerHTML = this.state.totalNumber
  }

  init()
}