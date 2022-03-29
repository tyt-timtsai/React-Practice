import { Link } from "react-router-dom";
import './Pagestyle.css'
import User from '../Components/User/User'
import Search from '../Components/Search/Search'

function Home({
  name,
  userName,
  avatar,
  followers,
  following,
  repos,
  url,
  gists,
  handleSearch,
  handleSubmit,
  error,
}){

  return (
    <div>
        <Search
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
        />
        { error ? (
          <h1 style={{color:'#fff', textAlign:'center'}}>{error}</h1>
          ) : (
            <div className="main">
              <div className="user-container">
                <User
                  name={name}
                  avatar={avatar}
                  userName={userName}
                  followers={followers}
                  following={following}
                  repos={repos}
                  url={url}
                  gists={gists}
                />
                <Link className="page-link" to={`/Github-Viewer/user/${userName}/repos`}>Repos List</Link>
              </div>
            </div>
          )}
    </div>
  )
}

export default Home