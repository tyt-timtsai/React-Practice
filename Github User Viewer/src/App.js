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
  const [repoName, setRepoName] = useState([]);
  const [repoUrl, setRepoUrl] = useState([]);
  const [starGazers, setStarGazers] = useState([]);
  const [language, setLanguage] = useState([]);


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

//repos資料
  // const setRepoData = ({svn_url, stargazers_count, language}) => {
  //   // setRepoName(name);
  //   setRepoUrl(svn_url);
  //   setStarGazers(stargazers_count);
  //   setLanguage(language);
  // };

// 一開始先預設在example
  useEffect(() => {
    fetch(`https://api.github.com/users/example`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      });
    i = 1;
  },[]);

//輸入要搜尋的部分
  const handleSearch = (e) => {
    setUserInput(e.target.value)
  };

  
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
        console.log(data)
      };
    });
  }

let i = 1;


//fetch Repos資料
  async function fetchRepos(){
    await fetch(`https://api.github.com/users/${userInput}/repos?page=${i}&per_page=10`)
      .then(res => res.json())
      .then((data) => {
        const repo_name = data.map((item) =>item.name)
        setRepoName(repo_name)

        const repo_url = data.map((item) => item.svn_url)
        setRepoUrl(repo_url)

        const repo_star = data.map((item) => item.stargazers_count)
        setStarGazers(repo_star)

        const repo_lang = data.map((item) => item.language)
        setLanguage(repo_lang)

        const repo_data = Array.from(data.map((item) => [
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

        console.log(data)
        console.log(repo_data)
        setRepoData(repo_data)
      })
  }
  // console.log(language)
  // console.log(repoName);
  console.log(repoUrl)
  console.log(starGazers)
  console.log(language)


//submit之後fetch新的使用者
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
    fetchRepos();
  };

//repoName return 成 HTML
  const showRepoName = repoName.map((item, index) => {
    return <div key={index}>{item}</div>
  });
//repoUrl return 成 HTML
  const showRepoUrl = repoUrl.map((item, index) => {
    return <a key={index}>{item}</a>
  });
//repoStargazer return 成 HTML
  const showStargazer = starGazers.map((item, index) => {
    return <div key={index}>{item}</div>
  });
//repoLanguage return 成 HTML
  const showLanguage = language.map((item, index) => {
    return <div key={index}>{item}</div>
  });

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
        <div className="card">
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
          {/* <Aside /> */}


          <Feed 
            showRepoName={showRepoName}
            showRepoUrl={showRepoUrl}
            showStargazer={showStargazer}
            showLanguage={showLanguage}
          />

          {/* <div className='container'>
            <div className="card">
              <ul>
                <li>{repoName}</li>
                <li>
                  <a href='#' target='_blank' rel='noreferrer noopener'>repo url</a>
                </li>
                <li>repos language</li>
                <li>repos stargazers_count</li>
              </ul>
            </div>
          </div> */}

          {/* {repoData.slice(0,10)} */}
          {/* {reposUrl.slice(0,10)} */}
      </div>)}
    </div>
  );
}

export default App;
