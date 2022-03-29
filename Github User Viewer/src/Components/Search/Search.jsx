import './Search.css'

const Search = ({ handleSearch, handleSubmit }) => {


  return (
    <form
      className='search-container' 
      onSubmit={handleSubmit}>
      <input 
        className='search-bar'
        type='search'
        name='search'
        id='search'
        placeholder='Search User name...'
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