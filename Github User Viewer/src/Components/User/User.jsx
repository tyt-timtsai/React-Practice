// import React from 'react'
import './User.css'

const User = () => {
  return (
    <div className='user-container'>
      <div className="user-info">
        <div className="user">
          <img src="https://picsum.photos/id/237/300" alt="avatar" />
          <h3>User Name</h3>
        </div>
        <div className="info">
          <ul>
            <li>Repostory</li>
            <li>Following</li>
            <li>Stargazer</li>
            <li>Follower</li>
            <li>link to Github</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default User