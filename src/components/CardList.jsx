import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error('NOOOOOO!')
  // }
  return (
    <div className='tc'>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            username={robots[i].username}
            mail={robots[i].mail}
          />
        )
      })}
    </div>
  )
}

export default CardList
