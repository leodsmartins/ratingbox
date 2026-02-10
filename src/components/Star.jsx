import React from 'react'

function Star({star, color, rating, hover, handleRating, handleHover}) {
  return (
    <span 
      className='star'
      style={{ color: star <= (rating || hover) ? color : "#ccc" }}
      onClick={() => handleRating(star)}
      onMouseEnter={() => handleHover(star)}
      onMouseLeave={() => handleHover(null)}
      >{"\u2605"}
    </span>
  )
}

export default Star