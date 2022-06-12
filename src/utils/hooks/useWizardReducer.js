import useSafeDispatch from './useSafeDispatch'
import * as React from 'react'

const defaultState = {
  genres: [],
  lastSubgenreId: 24,
}

function useWizardReducer() {
  const [{ genres }, dispatch] = React.useReducer(wizardReducer, defaultState)

  const safeDispatch = useSafeDispatch(dispatch)

  const setGenres = React.useCallback(
    (genres) => safeDispatch({ payload: genres, type: 'setGenres' }),
    [safeDispatch]
  )

  const addSubgenre = React.useCallback(
    ({ subGenre, genreId }) =>
      safeDispatch({ payload: { subGenre, genreId }, type: 'addSubgenre' }),
    [safeDispatch]
  )

  return {
    setGenres,
    genres,
    addSubgenre,
  }
}

function wizardReducer(state, action) {
  switch (action.type) {
    case 'setGenres':
      return {
        ...state,
        genres: [...action.payload],
      }
    case 'addSubgenre': {
      const index = state.genres.findIndex((genre) => {
        return genre.id === action.payload.genreId
      })
      const newSubgenre = [
        {
          ...action.payload.subGenre,
          id: state.lastSubgenreId + 1,
        },
      ]
      const newState = { ...state, lastSubgenreId: state.lastSubgenreId + 1 }
      newState.genres[index].subgenres = [
        ...newState.genres[index].subgenres,
        ...newSubgenre,
      ]
      return newState
    }
  }
}

export default useWizardReducer
