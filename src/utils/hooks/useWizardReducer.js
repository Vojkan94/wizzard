import useSafeDispatch from './useSafeDispatch'
import * as React from 'react'

const defaultState = {
  genres: [],
}

function useWizardReducer() {
  const [{ genres }, dispatch] = React.useReducer(wizardReducer, defaultState)

  const safeDispatch = useSafeDispatch(dispatch)

  const setGenres = React.useCallback(
    (genres) => safeDispatch({ payload: genres, type: 'setGenres' }),
    [safeDispatch]
  )

  return {
    setGenres,
    genres,
  }
}

function wizardReducer(state, action) {
  switch (action.type) {
    case 'setGenres':
      return {
        ...state,
        genres: [...action.payload],
      }
    case 'addSubgenre':
      return {
        ...state,
        [state.genres[5].subgenres]: [
          ...state.genres[5].susubgenres,
          ...action.payload,
        ],
      }
  }
}

export default useWizardReducer
