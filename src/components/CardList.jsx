import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <div className='tc'>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            username={robots[i].username}
            city={robots[i].address.city}
          />
        )
      })}
    </div>
  )
}

export default CardList
