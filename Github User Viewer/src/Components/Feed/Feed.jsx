import React from 'react'
import Card from './Card'

const Feed = ({showRepoName, showRepoUrl, showStargazer, showLanguage}) => {

  return (
      <Card 
      showRepoName={showRepoName}
      showRepoUrl={showRepoUrl}
      showStargazer={showStargazer}
      showLanguage={showLanguage}
      />
  )
}

export default Feed