import * as React from 'react'
import useWizardReducer from 'utils/hooks/useWizardReducer'
import genresData from 'data/dummyData'
const WizzardContext = React.createContext()
WizzardContext.displayName = 'WizzardContext'

function WizzardProvider(props) {
  const { setGenres, genres } = useWizardReducer()

  React.useEffect(() => {
    setGenres(genresData)
  }, [])

  const value = React.useMemo(
    () => ({
      genres,
    }),
    [genres]
  )

  return <WizzardContext.Provider value={value} {...props} />
}

function useWizzard() {
  const context = React.useContext(WizzardContext)
  if (!context) {
    throw new Error(
      'useWizzard must be used within a <WizzardProvider /> component'
    )
  }
  return context
}

export { useWizzard, WizzardProvider }
