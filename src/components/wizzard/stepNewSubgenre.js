import React from 'react'

function StepNewSubgenre({
  descriptionRequired,
  setDescriptionRequired,
  onChangeNameSubgenreHandler,
  nameValue,
}) {
  return (
    <div className="new-subgenre-wrapper">
      <input
        onChange={onChangeNameSubgenreHandler}
        className="input-field"
        placeholder="Subgenre name"
        value={nameValue}
      />
      <label style={{ cursor: 'pointer' }}>
        <input
          onChange={() => setDescriptionRequired(!descriptionRequired)}
          type="checkbox"
          checked={descriptionRequired}
        />{' '}
        Description is required for this subgenre
      </label>
    </div>
  )
}

export default StepNewSubgenre
