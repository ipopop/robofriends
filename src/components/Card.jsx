import React from 'react'

function Card({ username, city, id }) {
  console.log(username, city, id)
  return (
    <div className='card bg-light-blue tc dib br3 pa3 ma2 grow'>
      <img
        src={`https://robohash.org/set_set1/${id}?size=200x200`}
        alt='a random robot'
      />
      <h2>{username}</h2>
      <span>{city}</span>
    </div>
  )
}

export default Card
