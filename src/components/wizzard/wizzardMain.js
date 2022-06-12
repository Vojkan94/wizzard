import React from 'react'
import './wizzard.css'
import WizzardSteps from './wizzardSteps'
import { useWizzard } from 'context/wizzardContext'
import StepGenre from './stepGenre'
import StepSubgenre from './stepSubgenre'
import StepNewSubgenre from './stepNewSubgenre'
import StepBookInfo from './stepBookInfo'
import StepFinished from './stepFinished'
import { createBook } from 'utils/services/bookServices'
const initWizzardState = {
  genre: '',
  subGenre: '',
  bookInfo: {
    title: '',
  },
}
const defaultValidators = {
  Genre: false,
  Subgenre: false,
  'Add new subgenre': false,
  Information: false,
}
const defaultFirstStep = {
  name: 'Genre',
  index: 0,
}
function WizzardMain() {
  const { genres, addSubgenre } = useWizzard()
  const [activeStep, setActiveStep] = React.useState(defaultFirstStep)
  const [addNewSubgenre, setAddNewSubgenre] = React.useState(false)
  const [descriptionRequired, setDescriptionRequired] = React.useState(false)
  const [activeWizzardInfo, setActiveWizzardInfo] =
    React.useState(initWizzardState)
  const [stepsValidators, setStepsValidators] =
    React.useState(defaultValidators)
  const [isLoading, setIsLoading] = React.useState(false)
  const [bookSent, setBookSend] = React.useState(false)
  React.useEffect(() => {
    if (activeStep.name === 'Information') {
      if (descriptionRequired) {
        activeWizzardInfo.bookInfo.title && activeWizzardInfo.bookInfo.desc
          ? setStepsValidators({ ...stepsValidators, [activeStep.name]: true })
          : setStepsValidators({ ...stepsValidators, [activeStep.name]: false })
      } else {
        activeWizzardInfo.bookInfo.title &&
          setStepsValidators({ ...stepsValidators, [activeStep.name]: true })
      }
    }
  }, [activeStep.name])

  const onClickGenreHandler = (e) => {
    const genre = genres.find((iGenre) => {
      return iGenre.id == e.target.dataset.id
    })
    setActiveWizzardInfo({
      ...activeWizzardInfo,
      genre,
    })
    setStepsValidators({ ...stepsValidators, [activeStep.name]: true })
  }
  const onClickSubGenreHandler = (e) => {
    if (e.target.dataset.id === 'add-new-subgenre') {
      setActiveWizzardInfo({
        ...activeWizzardInfo,
        subGenre: '',
      })

      setAddNewSubgenre(true)
      setStepsValidators({ ...stepsValidators, [activeStep.name]: true })
      return
    }
    const subGenre = activeWizzardInfo.genre.subgenres.find((iSubGenre) => {
      return iSubGenre.id == e.target.dataset.id
    })
    setActiveWizzardInfo({
      ...activeWizzardInfo,
      subGenre,
    })
    setDescriptionRequired(subGenre.isDescriptionRequired)
    setAddNewSubgenre(false)
    setStepsValidators({ ...stepsValidators, [activeStep.name]: true })
  }
  const onClickNextHandler = () => {
    const allSteps = getSteps(activeStep.index + 1, addNewSubgenre)
    setActiveStep({
      name: allSteps[activeStep.index + 1].name,
      index: activeStep.index + 1,
    })
  }

  const onClickBackHandler = () => {
    if (activeStep.index === 0) return
    const allSteps = getSteps(activeStep.index - 1, addNewSubgenre)
    setActiveStep({
      name: allSteps[activeStep.index - 1].name,
      index: activeStep.index - 1,
    })
  }
  const onChangeNameSubgenreHandler = (e) => {
    setActiveWizzardInfo({
      ...activeWizzardInfo,
      subGenre: e.target.value,
    })
    setStepsValidators({
      ...stepsValidators,
      [activeStep.name]: e.target.value ? true : false,
    })
  }
  const resetAllSteps = () => {
    setBookSend(false)
    setActiveStep(defaultFirstStep)
    setActiveWizzardInfo(initWizzardState)
    setStepsValidators(defaultValidators)
    setAddNewSubgenre(false)
    setDescriptionRequired(false)
  }
  const onClickAddBook = async () => {
    if (isLoading) return
    console.log(activeWizzardInfo)

    if (addNewSubgenre) {
      addSubgenre({
        genreId: activeWizzardInfo.genre.id,
        subGenre: {
          name: activeWizzardInfo.subGenre,
          isDescriptionRequired: descriptionRequired,
        },
      })
    }

    setIsLoading(true)
    // const res = await createBook(activeWizzardInfo)
    setTimeout(() => {
      setIsLoading(false)
      setBookSend(true)
    }, 2000)
  }
  const handleBookInfoChange = (e) => {
    setActiveWizzardInfo({
      ...activeWizzardInfo,
      bookInfo: {
        ...activeWizzardInfo.bookInfo,
        [e.target.dataset.type]: e.target.value,
      },
    })
    setStepsValidators({ ...stepsValidators, [activeStep.name]: false })

    if (e.target.dataset.type === 'title' && descriptionRequired) {
      e.target.value &&
        activeWizzardInfo.bookInfo.desc &&
        setStepsValidators({ ...stepsValidators, [activeStep.name]: true })
    }
    if (e.target.dataset.type === 'title' && !descriptionRequired) {
      e.target.value &&
        setStepsValidators({ ...stepsValidators, [activeStep.name]: true })
    }
    if (e.target.dataset.type === 'desc' && descriptionRequired) {
      activeWizzardInfo.bookInfo.title &&
        e.target.value &&
        setStepsValidators({ ...stepsValidators, [activeStep.name]: true })
    }
    if (e.target.dataset.type === 'desc' && !descriptionRequired) {
      activeWizzardInfo.bookInfo.title &&
        setStepsValidators({ ...stepsValidators, [activeStep.name]: true })
    }
  }
  return (
    <div className="wizzard-main">
      {bookSent && <StepFinished resetAllSteps={resetAllSteps} />}
      {!bookSent && (
        <>
          <p style={{ margin: 0 }}>Add book - New book</p>
          <WizzardSteps
            steps={getSteps(activeStep.index, addNewSubgenre)}
            activeStep={activeStep.name}
            addNewSubgenre={addNewSubgenre}
          />

          {activeStep.name === 'Genre' && (
            <StepGenre
              genreList={genres}
              onClickHandler={onClickGenreHandler}
              activeWizzardInfo={activeWizzardInfo}
              subGenreList={activeStep.name === 'Subgenre'}
            />
          )}
          {activeStep.name === 'Subgenre' && (
            <StepSubgenre
              subGenreList={activeWizzardInfo.genre.subgenres}
              activeWizzardInfo={activeWizzardInfo}
              onClickHandler={onClickSubGenreHandler}
              addNewSubgenre={addNewSubgenre}
            />
          )}
          {activeStep.name === 'Add new subgenre' && (
            <StepNewSubgenre
              descriptionRequired={descriptionRequired}
              setDescriptionRequired={setDescriptionRequired}
              onChangeNameSubgenreHandler={onChangeNameSubgenreHandler}
              nameValue={activeWizzardInfo.subGenre}
            />
          )}
          {activeStep.name === 'Information' && (
            <StepBookInfo
              handleBookInfoChange={handleBookInfoChange}
              bookInfo={activeWizzardInfo.bookInfo}
            />
          )}
          <div className="buttons-wrapper">
            <button
              className="step-button back"
              disabled={activeStep.index === 0}
              onClick={onClickBackHandler}
            >
              &#60; Back
            </button>
            <button
              className={`step-button next ${isLoading && 'loading'}`}
              disabled={!stepsValidators[activeStep.name]}
              onClick={
                activeStep.name === 'Information'
                  ? onClickAddBook
                  : onClickNextHandler
              }
            >
              {activeStep.name === 'Information' ? 'Add' : 'Next'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

const initSteps = [
  {
    counter: 1,
    name: 'Genre',
  },
  {
    counter: 2,
    name: 'Subgenre',
  },
]

const dots = [
  {
    counter: '...',
  },
]

const addNewSubStep = [
  {
    counter: 3,
    name: 'Add new subgenre',
  },
  { counter: 4, name: 'Information' },
]

const infoStep = [{ counter: 3, name: 'Information' }]

function getSteps(index, addNewSubgenre) {
  return index <= initSteps.length - 1
    ? [...initSteps, ...dots]
    : addNewSubgenre
    ? [...initSteps, ...addNewSubStep]
    : [...initSteps, ...infoStep]
}
export default WizzardMain
