import './Header.css'
// import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({userName, repos, reposName, repoData, repoName}) => {
  return (
    <div className="title">
      <h2><a href='/'>Github User Viewer</a></h2>
      <li><Link to='/'>Home</Link></li>
      <li><Link to={`/user/${userName}/repos`}>Repos List</Link></li>
      <li><Link to={`/user/${userName}/repos/:id`}>Repos Page</Link></li>
    </div>
  )
}

export default Header