import React from 'react'

const Card = ({showRepoName, showRepoUrl, showStargazer, showLanguage}) => {
  return (
    <div className='container'>
        <div>
            {showRepoName}
        </div>
        <a>
            {showRepoUrl}
        </a>
        <div>
            {showStargazer}
        </div>
        <div>
            {showLanguage}
        </div>
    </div>
  )
}

export default Card