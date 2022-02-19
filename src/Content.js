import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = ({item, handleCheck, handleDelete}) => {
  const [item, setItem] = useState([
    
    //設定預設的listItem
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

    //設定完成listItem的功能
    const handleCheck = (id) => {
      const listItems = item.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
      setItem(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

    //設定刪除listItem的功能
    const handleDelete = (id) => {
      const listItems = item.filter((item) => item.id !== id);
      setItem(listItems);
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }

  return (
    <main>
        {item.length ? (
          <ul>
            {item.map((item) => (
              <li className='item' key={item.id}>
                <input 
                  type="checkbox"
                  onChange={() => handleCheck(item.id)}
                  checked={item.checked} 
                />
              <label
                  style={(item.checked) ? {textDecoration:'line-through'} : null}
                  onDoubleClick={() => handleCheck(item.id)}
              >{item.tesk}</label>
              <FaTrashAlt 
                  onClick={() => handleDelete(item.id)}
                  role='button' 
                  tabIndex='0'
              />
              </li>
            ))}
          </ul>

        ) : (
          <p style={{marginTop : '2rem'}}>Your list is empty.</p>
        )}
    </main>
  )
}

export default Content