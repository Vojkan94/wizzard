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
      {/* <div className="genre-list-wrapper">
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
      </div> */}
      {/* <div className="new-subgenre-wrapper">
        <input className="input-field" placeholder="Subgenre name" />
        <label style={{ cursor: 'pointer' }}>
          <input type="checkbox" /> Description is required for this subgenre
        </label>
      </div> */}

      <div className="book-info-wrapper">
        <label className="info-label">
          Book title
          <input className="input-field" placeholder="Book title" />
        </label>
        <label className="info-label">
          Author
          <select defaultValue="-">
            <option disabled value="-">
              Author
            </option>
            <option>Ivo</option>
          </select>
        </label>
        <label className="info-label">
          ISBN
          <input className="input-field" placeholder="ISBN" />
        </label>
        <label className="info-label">
          Publisher
          <select defaultValue="-">
            <option disabled value="-">
              Publisher
            </option>
            <option>Vulkan</option>
          </select>
        </label>
        <label className="info-label">
          Date published
          <input
            style={{ textTransform: 'uppercase' }}
            className="input-field"
            type="date"
          />
        </label>
        <label className="info-label">
          Number of pages
          <input
            type="number"
            className="input-field"
            placeholder="Number of pages"
          />
        </label>
        <label className="info-label">
          Format
          <select defaultValue="-">
            <option disabled value="-">
              Format
            </option>
            <option>A5</option>
          </select>
        </label>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label className="info-label" style={{ width: '48%' }}>
            Edition
            <input className="input-field" placeholder="Edition" />
          </label>
          <label className="info-label" style={{ width: '48%' }}>
            Edition language
            <select defaultValue="-">
              <option disabled value="-">
                Edition language
              </option>
              <option>srpski</option>
            </select>
          </label>
        </div>
        <label className="info-label">
          Description
          <textarea rows="4" placeholder="Type the description..." />
        </label>
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
