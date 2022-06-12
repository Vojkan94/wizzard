import React from 'react'

function WizzardSteps({ steps = [], activeStep }) {
  const stepsForRender = steps.map((step, index) => {
    return (
      <Step
        key={index}
        counter={step.counter}
        name={step.name}
        activeStep={activeStep === step.name}
      />
    )
  })

  return <div className="steps-wrapper">{stepsForRender}</div>
}

function Step({ counter, name, activeStep }) {
  return (
    <div className={`step-item ${activeStep && 'active'}`}>
      <div className="step-counter">{counter}</div>
      {name && (
        <div className="step-name" style={{ fontSize: '13px' }}>
          {name}
        </div>
      )}
    </div>
  )
}

export default WizzardSteps
