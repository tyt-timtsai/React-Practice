import { Link, Route, Routes } from 'react-router-dom'
import ReposPage from '../../Pages/ReposPage'
import './Feed.css'

const Feed = ({repoData,userName, error}) => {
  const showRepoCard = repoData.map((item) => (
        <Link        
          key= {item.name}
          to={`/user/${userName}/repos/${item.name}`}
          className='cards'
        >
          <div className="repo-name">{item.name}</div>
          <div className="stargazer">Stargazers : {item.stargazers_count}</div>
          {item.language==null ? (
            <div className='no-lang'>no specific language</div>
            ) : (
            <div className="repo-lang">{item.language}</div>
          )}
          {/* <a
              href={item.svn_url} 
              target='_blank' 
              rel='noreferrer noopener' 
              className="repo-url">
              Repos Page
          </a> */}
        </Link>
  ))    

  return (
      <div className='repos-container'>
        {showRepoCard}
      </div>
  )
}

export default Feed