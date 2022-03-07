// import React from 'react'
import './Search.css'

const Search = ({ handleSearch, handleSubmit }) => {
  return (
    <form className='container' onSubmit={handleSubmit}>
      <input 
        className='search-bar'
        type='search'
        name='search'
        id='search'
        placeholder='User Name'
        onChange={handleSearch}
        />
      <input 
        className='search-btn'
        type='submit'
        value='Search'
        />
    </form>
  )
}

export default Search