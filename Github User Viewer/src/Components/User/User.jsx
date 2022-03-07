// import React from 'react'
import './User.css'

const User = ({name, avatar, userName, followers, following, repos, url}) => {
  return (
    <div className='user-container'>
      <div className="user-info">
        <div className="user">
          <img src={avatar} alt="avatar" />
          <h3>{userName}</h3>
        </div>
        <div className="info">
          <ul>
            <li>{repos} Repostory</li>
            <li>{following} Following</li>
            <li>Stargazer</li>
            <li>{followers} Follower</li>
            <li><a href={url} target='_blank'>link to Github</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default User