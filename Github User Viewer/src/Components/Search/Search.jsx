// import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='container'>
      <input className='search-bar' type='search' name='search' id='search' placeholder='User Name'/>
      <input className='search-btn' type='submit' value='Search' />
    </div>
  )
}

export default Search