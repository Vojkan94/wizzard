import React from 'react'

function SelectWithData({ data = [], ...props }) {
  const options = React.useMemo(
    () => data.map((item) => <option key={item.key}>{item.value}</option>),
    [data]
  )

  return <select {...props}>{options}</select>
}

export default SelectWithData
