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

  const setData = ({ name, login, followers, following, public_repos, avatar_url, html_url }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setUrl(html_url);
  };

  useEffect(() => {
    console.log('run');
    fetch(`https://api.github.com/users/example`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log('get');
      });
  },[]);


  const handleSearch = (e) => {
    setUserInput(e.target.value)
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('change');
    // console.log(`https://api.github.com/users/${userInput}`);
    fetch(`https://api.github.com/users/${userInput}`)
      .then(console.log('start'))
      .then(res => res.json())
      .then(console.log('start2'))
      .then(data => {
        if(data.message){
          setError(data.message);
          console.log('no user');
        }
        else {
          console.log('start4')
          setData(data);
          setError(null);
          console.log('fetch');
        };
      });
  };

  return (
    <div className="App">
      <Header />
      <Search
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
      />
      { error ? (
      <h1 style={{backgroundColor:'#fff', color:'steelblue'}}>{error}</h1>
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
