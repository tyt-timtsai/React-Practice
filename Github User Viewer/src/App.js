import './App.css';
import Header from './Components/Header/Header'
import User from './Components/User/User'
import Feed from './Components/Feed/Feed'
import Aside from './Components/Aside'
import Search from './Components/Search/Search'
import React, { useState, useEffect } from 'react'



function App() {

// User Data
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [url, setUrl] = useState('');
  const [gists, setGists] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

//Reops Data
  const [repoData, setRepoData] = useState([]);
  let page = 1;

//使用者的資料
  const setData = ({ name, login, followers, following, public_repos, avatar_url, html_url, public_gists }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setUrl(html_url);
    setGists(public_gists);
  };

  //輸入要搜尋的部分
    const handleSearch = (e) => {
      setUserInput(e.target.value)
    };
  
// 一開始先預設在example
  useEffect(() => {
    fetch(`https://api.github.com/users/example`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      });
    page = 1;
  },[]);
  
//fetch使用者資料
  function fetchUser(){
   fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      if(data.message){
        setError(data.message);
      }
      else {
        setData(data);
        setError(null);
        setRepoData([]);
      };
    });
  }

//fetch Repos資料
  async function fetchRepos(){
    await fetch(`https://api.github.com/users/${userInput}/repos?page=${page}&per_page=10`)
      .then(res => res.json())
      .then((data) => {
        const newRepo = Array.from(data.map((item) => [
          item.name,
          item.svn_url,
          item.stargazers_count,
          item.language
        ]), (item) => {
          return {
            name : item[0],
            svn_url : item[1],
            stargazers_count : item[2],
            language : item[3]
          }
        })

        setRepoData((prevArray) =>[...prevArray, ...newRepo])
      })
  }


//submit之後fetch新的使用者
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
    fetchRepos();
  };

  return (
    <div className="App">
      <Header />
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
            </div>
            <div className="card-section">
              <Feed
                repoData={repoData}
              />
            </div>
          </div>
        )}
    </div>
  );
}

export default App;
