import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState([
    {
      id: 1,
      checked: true,
      tesk: 'One half pound bag of Cocoa Covered Almonds Unsalted'
    },
    {
      id: 2,
      checked: false,
      tesk: 'Item 2'
    },
    {
      id: 3,
      checked: false,
      tesk: 'Item 3'
    }]);


    const handleCheck = (id) => {
      const listItems = item.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
      setItem(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
      const listItems = item.filter((item) => item.id !== id);
      setItem(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

  return (
    <div className="App">
      <Header title='Grocery List' />
      <Content 
        item={item}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={item.length} />
    </div>
  );
}

export default App;
