import React, { Component }  from 'react'
import CounterButton from './CounterButton'

class Header extends Component {
  // shouldComponentUpdate(nextprops, nextState) {
  //   return false 
  // }
  render() {
      console.log('Header')
      return (
        <div>
          <h1 className='f2'>RoboFriends</h1>
          <CounterButton color={'teal'} />
        </div>
      )
    }
}

export default Header;