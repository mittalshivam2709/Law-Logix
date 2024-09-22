import { createStore } from 'redux'
import rootReducer from './reducers'
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from './localStorage'

// Load the state from Local Storage (if available)
const persistedState = loadStateFromLocalStorage()

// Create Redux store, using the persisted state if available
const store = createStore(rootReducer, persistedState)

// Subscribe to store updates to save to Local Storage
store.subscribe(() => {
  saveStateToLocalStorage(store.getState())
})

export default store
