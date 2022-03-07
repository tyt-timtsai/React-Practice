import './App.css';
import Header from './Components/Header/Header'
import User from './Components/User/User'
import Feed from './Components/Feed'
import Aside from './Components/Aside'
import Search from './Components/Search/Search'
import React, { useState, useEffect } from 'react'



function App() {

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [url, setUrl] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/example')
      .then(res => res.json())
      .then(data => {
        setData(data)
      });
  }, []);

  const setData = ({ name, login, followers, following, public_repos, avatar_url, html_url }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setUrl(html_url);
  }

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        if(data.massage){
          setError(data.massage);
        }
        else {
          setData(data);
          setError(null);
        }
      })
  }

  return (
    <div className="App">
      <Header />
      <Search
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
      />
      { error ? (
      <h1>{error}</h1>
      ) : (
        <div className="card">
          <User
            name={name}
            avatar={avatar}
            userName={userName}
            followers={followers}
            following={following}
            repos={repos}
            url={url}
          />
          <Aside />
          <Feed />
      </div>)}
    </div>
  );
}

export default App;
