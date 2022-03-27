import React from 'react'
import User from '../Components/User/User'
import Feed from '../Components/Feed/Feed'

const ReposList = ({repoData, hasMore, userName ,error}) => {

return (
    <div className="container">
        <div className="card-section">
            <Feed
              repoData={repoData}
              userName={userName}
            />
            { !hasMore ?(<div>No more repostory</div>):(<div>Loading...</div>) }
        </div>
    </div>
  )
}

export default ReposList