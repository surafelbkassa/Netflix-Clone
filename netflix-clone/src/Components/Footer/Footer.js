import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css';
const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FacebookOutlinedIcon /></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><YouTubeIcon/></a></li>
          </ul>
        </div>
        <div className='footer_data'>
          <ul>
            <li>Audio Description</li>
            <li>Investor relation</li>
            <li>Legal Notice</li>
          </ul>
        </div>
        <div className='footer_data'>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie preference</li>
          </ul>
        </div>
        <div className='footer_data'>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className='footer_data'>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='service_code'>
          <p>Service Code</p>
        </div>
        <div className='copy_right'>
          &copy; 1997-2021 Netflix, Inc.
        </div>
      </div>
    </div>
  )
}

export default Footer
