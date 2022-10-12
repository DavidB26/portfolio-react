import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
   <footer>
     <a href="" className='footer__logo'>LOGO</a>


     <ul className='permalinks'>
       <li><a href="#">Home</a></li>
       <li><a href="#about">about</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#testimonials">Testimonials</a></li>
       <li><a href="#contact">Contact</a></li>
     </ul>

<div className="footer__socials">
  <a href="Facebook"><FaFacebookF/></a>
  <a href="twitter"><FiInstagram/></a>
  <a href="instagram"><IoLogoTwitter/></a>
</div>


<div className="footer__copyright">
  <small>&copy; WebDeveloperSeo. All rights reserved. </small>
</div>
   </footer>
  )
}

export default Footer