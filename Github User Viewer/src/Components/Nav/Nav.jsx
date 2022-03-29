import './Nav.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFolder } from '@fortawesome/free-solid-svg-icons'

const Nav = ({userName}) => {
  return (
        <div className='nav-container'>
            <ul className='nav-list'>
                <li>
                    <Link className='nav-link' to='/Github-Viewer/'>
                        <FontAwesomeIcon className='nav-icon' icon={faHouse} />
                        <span className="nav-name">Home</span>
                    </Link>
                </li>
                <li>
                    <Link className='nav-link' to={`/Github-Viewer/user/${userName}/repos`}>
                        <FontAwesomeIcon className='nav-icon' icon={faFolder} />
                        <span className="nav-name">List</span>
                    </Link>
                </li>
            </ul>
        </div>
  )
}

export default Nav