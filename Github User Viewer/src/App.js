import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header'
import User from './Components/User/User'
import Feed from './Components/Feed/Feed'
import Aside from './Components/Aside'
import Search from './Components/Search/Search'
import Home from './Pages/Home';
import ReposPage from './Pages/ReposPage';
import UserPage from './Pages/UserPage';



function App() {
// // User Data
  const [userName, setUserName] = useState('');
  const [repos, setRepos] = useState('');

  return (
    <Router>
      <div className="App">
        <Header 
          userName={userName}
          repos={repos}
        />
        <Routes>
          <Route path='/' exactly element={<Home 
          userName={userName}
          setUserName={setUserName}
          repos={repos}
          setRepos={setRepos}
          />}/>
          <Route path={`/user/${userName}/repos`} element={<UserPage
          userName={userName}
          setUserName={setUserName}
          repos={repos}
          setRepos={setRepos}
           />}/>
          <Route path={`/user/${userName}/repos/${repos}`} element={<ReposPage />}/>
          {/* <Route path='*' element={<ErrorPage />}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
