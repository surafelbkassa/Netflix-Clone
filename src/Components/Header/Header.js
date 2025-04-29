import React from 'react' 
import './header.css';
import NetflixLogo from '../../assets/images/Screenshot 2025-02-11 230821.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
            <ul>
              <li><img alt="Netflix logo"src={NetflixLogo} width="100"/></li>
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li> 
                <li>MyList</li>
                <li>Browse my language</li>
            </ul>
        </div>
        <div className='header_right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /> </li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
  </div>
  )
}

export default Header
