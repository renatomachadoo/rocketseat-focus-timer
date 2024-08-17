import state from './state.js'
import { timer, updateDisplay } from './timer.js'
import * as audios from './sounds.js'

export const toggleRunning = () => {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer()
  if(state.isRunning){
    return audios[state.selectedSound].play()
  }
  audios[state.selectedSound].pause()
}

export const reset = () => {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  state.minutes = 5
  state.seconds = 0
  updateDisplay(state.minutes, state.seconds)
  audios[state.selectedSound].pause()
}

export const addMinutes = () => {
  state.minutes = state.minutes + 5
  if(state.minutes > 60){
    state.minutes = 60
  }
  updateDisplay(state.minutes, state.seconds)
}

export const removeMinutes = () => {
  state.minutes = state.minutes - 5
  if(state.minutes <= 0){
    state.minutes = 1
  }
  updateDisplay(state.minutes, state.seconds)
}