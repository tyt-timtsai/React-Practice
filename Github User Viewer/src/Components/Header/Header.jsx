import './Header.css'
// import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({userName, repos}) => {
  return (
    <div className="title">
      <h2>Github User Viewer</h2>
      <Link to='/'>Home</Link>
      <Link to={`/user/${userName}/repos`}>UserPage</Link>
      <Link to={`/user/${userName}/repos/${repos}`}>ReposPage</Link>
    </div>
  )
}

export default Header