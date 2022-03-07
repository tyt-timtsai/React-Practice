import './App.css';
import Header from './Components/Header/Header'
import User from './Components/User/User'
import Feed from './Components/Feed'
import Aside from './Components/Aside'
import Search from './Components/Search/Search'

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <User />
      <Aside />
      <Feed />
    </div>
  );
}

export default App;
