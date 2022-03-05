import React from 'react'
import "./feature.css"

const Feature = (props) => {
  return (
    <div className='feature'>
      <h2 className="sub-head">{props.title}</h2>
      <p className="sub-p">{props.text}</p>
    </div>
  )
}

export default Feature