import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
  console.log('SearchBox');
  return (
    <div className='pa2'>
      <input
        aria-label="Search Robots"
        className='pa3 mb4 ba br3 b--pink bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
