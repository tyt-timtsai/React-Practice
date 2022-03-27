import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Routes, Route ,useParams } from "react-router-dom";
import Header from './Components/Header/Header'
import User from './Components/User/User'
import Feed from './Components/Feed/Feed'
import Aside from './Components/Aside'
import Search from './Components/Search/Search'
import Home from './Pages/Home';
import ReposPage from './Pages/ReposPage';
import ReposList from './Pages/ReposList';
import ErrorPage from './Pages/ErrorPage';



function App() {
// User Data
  const [name, setName] = useState('');
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
// const [repoData, setRepoData] = useState([]);
const [repoData, setRepoData] = useState([{
  name : '',
  svn_url : '',
  stargazers_count : '',
  language : '',
}]);
const [reposName, setReposName] = useState([])
const [hasMore, setHasMore] = useState(true);
const [page, setPage] = useState(1);
const reposAPI = `https://api.github.com/users/${userInput}/repos?page=${page}&per_page=10`;

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

useEffect(() => {
  window.addEventListener('scroll', handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll)
  };
},[page,userInput,reposAPI,hasMore])

const handleScroll = (e) => {
  if( hasMore === true && window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight){
    fetchRepos(userInput);
    console.log('handleScroll userInput :'+ userInput);
    console.log('handleScroll page :'+ page);
    console.log('handleScroll reposAPI :'+ reposAPI); 
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
      setRepoData([]);
    };
  });
}

const reporepo = repoData.map((item) => item.name);

const handleclick = (e) => {
  console.log(e.target.value);
}


useEffect(() => {
  console.log(repoData);
  console.log(repoData[1]);
  console.log(reposName);
  console.log(reporepo);
},[repoData,reposName])
// useEffect(() => {
//   console.log(repoData.map((item)=>item.name));
// },[repoData])


useEffect(() => {
  window.addEventListener('click', handleclick)
  return () => {
    window.removeEventListener('click', handleclick)
  };
},[])

//fetch Repos資料
async function fetchRepos(){

  console.log('inside function page :'+ page);
  console.log('inside function userInput :'+ userInput);
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
      const reponame = data.map((item)=>
       [item.name]
      )
      setRepoData((prevArray) =>[...prevArray, ...newRepos])
      setReposName((prev) => [...prev, ...reponame])
      console.log(data.length);
      if(data.length < 10){
        setHasMore(false);
      }
    })
};

let try1 = repoData.map((item)=> item.name)

const repo = useParams();

  return (
    <Router>
      <div className="App">
        <Header 
          userName={userName}
          repos={repos}
          reposName={reposName}
          repoData={repoData}
          // repoName={repoName}
        />
        <Routes>
          <Route path='/' exact element={<Home
            name={name}
            userName={userName}
            avatar={avatar}
            followers={followers}
            following={following}
            repos={repos}
            url={url}
            gists={gists}
            setName={setName}
            setUserName={setUserName}
            setFollowers={setFollowers}
            setFollowing={setFollowing}
            setAvatar={setAvatar}
            setRepos={setRepos}
            setUrl={setUrl}
            setGists={setGists}
            //
            error={error}
            repoData={repoData}
            hasMore={hasMore}
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
          />}>
            <Route path={`/user/${userName}/repos`} element={<ReposList
              name={name}
              userName={userName}
              avatar={avatar}
              repos={repos}
              followers={followers}
              following={following}
              url={url}
              gists={gists}
              setRepos={setRepos}
              setUserName={setUserName}
              //
              repoData={repoData}
              error={error}
              hasMore={hasMore}
            />}/>
           </Route>
          <Route path={`/user/${userName}/repos/:id`} element={<ReposPage userInput={userInput}/>}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
