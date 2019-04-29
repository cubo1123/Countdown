import React from 'react'
const TimeItem = props => {
  const { measure, value } = props.data
  return (
    <div className="counter" >
      <p className="value" >{value}</p>
      <p className="tag" >{measure}</p>
    </div>
  )
}

export { TimeItem }
