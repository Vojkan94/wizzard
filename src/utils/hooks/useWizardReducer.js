import useSafeDispatch from './useSafeDispatch'
import * as React from 'react'

const defaultState = {
  genres: [],
}

function useWizardReducer() {
  const [{ genres }, dispatch] = React.useReducer(wizardReducer, defaultState)

  const safeDispatch = useSafeDispatch(dispatch)

  const setGenres = React.useCallback(
    (genres) => safeDispatch({ genres }),
    [safeDispatch]
  )

  return {
    setGenres,
    genres,
  }
}

function wizardReducer(state, payload) {
  return {
    ...state,
    ...payload,
  }
}

export default useWizardReducer
