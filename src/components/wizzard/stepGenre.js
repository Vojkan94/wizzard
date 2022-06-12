import React from 'react'

function StepGenre({ genreList = [], activeWizzardInfo, onClickHandler }) {
  const elementsForRender = genreList.map((genre, index) => {
    return (
      <div
        onClick={onClickHandler}
        className={`genre-button ${
          activeWizzardInfo.genre?.id === genre.id ? 'active' : ''
        }`}
        data-id={genre.id}
        key={index}
      >
        {genre.name}
      </div>
    )
  })
  return <div className="genre-list-wrapper">{elementsForRender}</div>
}

export default StepGenre
