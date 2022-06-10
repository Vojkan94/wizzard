import React from 'react'
import './wizzard.css'

function WizzardMain() {
  return (
    <div className="wizzard-main">
      <p style={{ margin: 0 }}>Add book - New book</p>
      <div className="steps-wrapper">
        <div className="step-item">
          <div className="step-counter">1</div>
          <div className="step-name">First</div>
        </div>
        <div className="step-item">
          <div className="step-counter">2</div>
          <div className="step-name">Second</div>
        </div>
        <div className="step-item active">
          <div className="step-counter">3</div>
          <div className="step-name">Third</div>
        </div>
        <div className="step-item">
          <div className="step-counter">4</div>
          <div className="step-name">Forth</div>
        </div>
      </div>
      <div className="genre-list-wrapper">
        <div className="genre-button">Genre 1</div>
        <div className="genre-button">Genre 1</div>
        <div className="genre-button">Genre 1</div>
        <div className="genre-button">Genre 1</div>
        <div className="genre-button">Genre 1</div>
        <div className="genre-button active">Genre 1</div>
        <div className="genre-button">Genre 1</div>
        <div className="genre-button">Genre 1</div>
        <div className="genre-button">Genre 1</div>
        <div className="genre-button">Genre 1</div>
      </div>
      <div className="buttons-wrapper">
        <button className="step-button back">&#60; Back</button>
        <button className="step-button next" disabled>
          Next
        </button>
      </div>
    </div>
  )
}

export default WizzardMain
