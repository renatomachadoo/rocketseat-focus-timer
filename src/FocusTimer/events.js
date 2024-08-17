import { controls, soundboard } from './elements.js'
import * as actions from './actions.js'
import * as audios from './sounds.js'
import state from './state.js'

export function registerControls(){
  controls.addEventListener("click", (event) => {
      const action = event.target.dataset.action
      if(typeof actions[action] != "function"){
          return
      }
      
      actions[action]()
  })
}

export function registerAudios(){
  soundboard.addEventListener("click", (event) => {
      
      const music = event.target.dataset.selectmusic
      if(typeof audios[music+'Audio'] != "object"){
          return
      }
      
      let selectedSoundElement = document.getElementById(state.selectedSound)
      let newSelectedSoundElement = document.getElementById(music+'Audio')

      selectedSoundElement.classList.remove('selected')
      newSelectedSoundElement.classList.add('selected')

      audios[state.selectedSound].pause()
      state.selectedSound = music+'Audio'

      if(state.isRunning){
        audios[state.selectedSound].play()
      }
  })
}