import React from 'react'

function StepFinished({ resetAllSteps }) {
  return (
    <div className="step-finished">
      <div className="checkmark">
        <span style={{ fontSize: '70px', color: '#4f4d58' }}>&#10003;</span>
      </div>
      <strong>Book added successfully</strong>
      <button onClick={resetAllSteps} className="add-another-book">
        Add another book
      </button>
    </div>
  )
}

export default StepFinished
