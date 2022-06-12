import React from 'react'

function StepSubgenre({
  subGenreList = [],
  activeWizzardInfo,
  onClickHandler,
  addNewSubgenre,
}) {
  const elementsForRender = subGenreList.map((subGenre, index) => {
    return (
      <div
        onClick={onClickHandler}
        className={`genre-button ${
          activeWizzardInfo.subGenre?.id === subGenre.id ? 'active' : ''
        }`}
        data-id={subGenre.id}
        key={index}
      >
        {subGenre.name}
      </div>
    )
  })
  return (
    <div className="genre-list-wrapper">
      {elementsForRender}
      {subGenreList && (
        <div
          onClick={onClickHandler}
          className={`genre-button ${addNewSubgenre && 'active'}`}
          data-id={'add-new-subgenre'}
        >
          Add new
        </div>
      )}
    </div>
  )
}

export default StepSubgenre
