import * as el from './elements.js'
import state from './state.js'
import { reset } from './actions.js'

export const timer = () => {
  clearTimeout(state.nextTimeout)

  if (!state.isRunning) {
    return
  }

  state.seconds--

  if(state.seconds < 0){
    state.seconds = 59
    if(state.minutes > 0){
      state.minutes--
    }else{
      reset()
    }
  }

  updateDisplay(state.minutes, state.seconds)

  state.nextTimeout = setTimeout(() => {
    timer()
  }, 1000);
}


export const updateDisplay = (minutes, seconds) => {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}