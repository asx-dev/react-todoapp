import React from 'react'
import './Card.css'
const Card = ({ task }) => {
  return (
    <div className='card'>
      <h3>{task}</h3>
    </div>
  )
}

export default Card
