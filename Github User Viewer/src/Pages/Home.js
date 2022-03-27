import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Routes, Route, Link, Outlet } from "react-router-dom";
import User from '../Components/User/User'
import Feed from '../Components/Feed/Feed'
import Search from '../Components/Search/Search'



function Home({
  name,
  userName,
  avatar,
  followers,
  following,
  repos,
  url,
  gists,
  setName,
  setFollowers,
  setFollowing,
  setAvatar,
  setUrl,
  setGists,
  setUserName,
  setRepos,
  //
  handleSearch,
  handleSubmit,
  error,
  repoData,
  hasMore,
}){



  return (
    <div>
        <Search
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
        />
        { error ? (
          <h1 style={{backgroundColor:'#fff', color:'steelblue', textAlign:'center'}}>{error}</h1>
          ) : (
            <div className="main">
              <div className="container">
                <User
                  name={name}
                  avatar={avatar}
                  userName={userName}
                  followers={followers}
                  following={following}
                  repos={repos}
                  url={url}
                  gists={gists}
                />
                <Link to={`/user/${userName}/repos`}>Show Repos List</Link>
                <hr></hr>
                <Outlet />
              </div>
            </div>
          )}
    </div>
  )
}

export default Home