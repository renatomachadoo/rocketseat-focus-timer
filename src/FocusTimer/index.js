import state from "./state.js"
import { registerControls, registerAudios } from "./events.js"

export const start = (minutes, seconds) => {
  state.minutes = minutes
  state.seconds = seconds

  registerControls()
  registerAudios()
}