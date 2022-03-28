import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const User = ({avatar, userName, followers, following, repos, url, gists}) => {
  return (
    <div className='user-container'>
      <div className="user-info">
        <div className="user">
          <img className='avatar' src={avatar} alt="avatar" />
          <h3 className='user-name'>{userName}</h3>

          <div className="link-container">
          <a
            href={url}
            target='_blank'
            rel='noreferrer noopener'
            className='user-link'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        </div>

        <div className='info-container'>
          <ul className='info'>
            <li className='info-card'>
              <p>Public Repos</p>
              <div className="data">{repos}</div>
            </li>
            <li className='info-card'>
              <p>Public Gists</p>
              <div className="data">{gists}</div>
            </li>
            <li className='info-card'>
              <p>Following</p>
              <div className="data">{following}</div>
            </li>
            <li className='info-card'>
              <p>Follower</p>
              <div className="data">{followers}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default User