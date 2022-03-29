import { Link } from 'react-router-dom'
import './Feed.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Feed = ({reposData,userName, page}) => {
  const showRepoCard = reposData.map((item,index) => (
        <Link
          key= {item.name}
          to={`/Github-Viewer/user/${userName}/repos/${item.name}`}
          className='cards'
        >
          <div className='stargazer'>
          <span className='card-index'>{index}</span>
            <FontAwesomeIcon className='star-icon' icon={faStar} />
            {item.stargazers_count}
          </div>
          <div className='repo-name'>{item.name}</div>
          {item.language==null ? (
            <div className='no-lang'>no specific language</div>
            ) : (
            <div className='repo-lang'>{item.language}</div>
          )}
        </Link>
  ))    

  return (
      <div className='repos-container'>
        {page >= 2 ? (<>{showRepoCard}</>):(<div></div>)}
      </div>
  )
}

export default Feed