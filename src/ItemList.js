// import { FaTrashAlt } from 'react-icons/fa' 這個import同樣移至child component
import LineItem from './LineItem'

const ItemList = ({ item, handleCheck, handleDelete }) => {
  return (
    <ul>
        {item.map((item) => (

        //整段可以再往下移至另一層的child-components
            // <li className='item' key={item.id}>
            // <input 
            //     type="checkbox"
            //     onChange={() => handleCheck(item.id)}
            //     checked={item.checked} 
            // />
            // <label
            //     style={(item.checked) ? {textDecoration:'line-through'} : null}
            //     onDoubleClick={() => handleCheck(item.id)}
            // >{item.tesk}</label>
            // <FaTrashAlt 
            //     onClick={() => handleDelete(item.id)}
            //     role='button' 
            //     tabIndex='0'
            // />
            // </li>

          //再將child component使用進來
            <LineItem 
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ))}
    </ul>
  )
}

export default ItemList