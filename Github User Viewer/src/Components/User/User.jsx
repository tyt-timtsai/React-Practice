// import React from 'react'
import './User.css'

const User = ({name, avatar, userName, followers, following, repos, url, gists}) => {
  return (
    <div className='user-container'>
      <div className="user-info">

        <div className="user">
          <img src={avatar} alt="avatar" />
          <h3>{userName}</h3>
        </div>

        <div className="info">
          <ul>
            <li>Public Repostory : {repos}</li>
            <li>Public Gists : {gists}</li>
            <li>Following : {following}</li>
            <li>Follower : {followers}</li>
            <li><a href={url} target='_blank' rel='noreferrer noopener'>Github Page</a></li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default User