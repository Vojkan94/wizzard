import * as React from 'react'

function ErrorMessage({ error, ...props }) {
  return (
    <div role="alert" {...props}>
      <span style={{ fontSize: '15px' }}>There was an error: </span>
      <strong>
        <pre>{error.message}</pre>
      </strong>
    </div>
  )
}

function ErrorFallback({ error }) {
  return (
    <ErrorMessage
      error={error}
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  )
}

export { ErrorFallback }
