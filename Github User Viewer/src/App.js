import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Home from './Pages/Home';
import ReposPage from './Pages/ReposPage';
import ReposList from './Pages/ReposList';
import ErrorPage from './Pages/ErrorPage';



function App() {
// User Data
  const [userName, setUserName] = useState('');
  const [repos, setRepos] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [avatar, setAvatar] = useState('');
  const [url, setUrl] = useState('');
  const [gists, setGists] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(null);

// Reops Data
  const [reposData, setReposData] = useState([{
    name : '',
    svn_url : '',
    stargazers_count : '',
    language : '',
  }]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const reposAPI = `https://api.github.com/users/${userInput}/repos?page=${page}&per_page=10`;

//使用者的資料
const setData = ({ login, followers, following, public_repos, avatar_url, html_url, public_gists }) => {
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
    setPage(1);
  };

//submit之後fetch新的使用者
const handleSubmit = (e) => {
  e.preventDefault();
  fetchUser();
  fetchRepos();
  setHasMore(true);
};

// 一開始先預設在example
useEffect(() => {
  fetch(`https://api.github.com/users/example`)
    .then(res => res.json())
    .then(data => {
      setData(data)
    });
},[]);

// 接收視窗至底部的訊息
useEffect(() => {
  window.addEventListener('scroll', handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll)
  };
},[page,userInput,reposAPI,hasMore])

// 底部再次fetch
const handleScroll = (e) => {
  if( hasMore === true && window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight){
    fetchRepos(userInput);
  }
}

//fetch使用者資料
async function fetchUser(){
  await fetch(`https://api.github.com/users/${userInput}`)
  .then(res => res.json())
  .then(data => {
    if(data.message){
      setError(data.message);
    }
    else {
      setData(data);
      setError(null);
      setReposData([]);
    };
  });
}

//fetch Repos資料
async function fetchRepos(){
  setPage(page => page+1)
  await fetch(reposAPI)
    .then(res => res.json())
    .then((data) => {
      const newRepos = Array.from(data.map((item) => [
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
        }})
      setReposData((prevArray) =>[...prevArray, ...newRepos])
      if(data.length < 10){
        setHasMore(false);
      }
    })
};

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Nav
            userName={userName}
          />
        </div>
   
        <Routes>
          <Route path='/Github-Viewer/' exact element={<Home
            userName={userName}
            avatar={avatar}
            followers={followers}
            following={following}
            repos={repos}
            url={url}
            gists={gists}
            error={error}
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
          />}/>
          <Route path={`/Github-Viewer/user/${userName}/repos`} element={<ReposList
            userName={userName}
            reposData={reposData}
            hasMore={hasMore}
            page={page}
          />}/>
          <Route path={`/Github-Viewer/user/${userName}/repos/:id`} element={<ReposPage userName={userName}/>}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
