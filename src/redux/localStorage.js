// Save state to Local Storage
export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('reduxState', serializedState)
  } catch (error) {
    console.error('Could not save state to localStorage:', error)
  }
}

// Load state from Local Storage
export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState')
    if (serializedState === null) {
      return undefined // No state in localStorage, use the initial state
    }
    return JSON.parse(serializedState)
  } catch (error) {
    console.error('Could not load state from localStorage:', error)
    return undefined
  }
}
    