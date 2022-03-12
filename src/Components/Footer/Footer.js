import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Footer.css';
import { GiElephantHead } from "react-icons/gi"

const Footer = () => {
  return (
  <div className='footer-container'>
    <section className='footer-subscription'>
       <p className='footer-heading'>Join the Adventure newsletter to receive our best vacation deals</p>
       <p className='footer-text'>You can unsubscribe at any time</p>  
       <div className='input-areas'>
          <form>
            <input type='email' name='email ' placeholder='EmailID' className='footer-input' />
            <Button button-style='btn--outline'>Subscribe</Button>
          </form>
       </div>              
    </section>
    <div className='footer-links'>
       <div className='footer-link-wrap'>
          <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of service</Link>
          </div>   
          <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Destinations</Link>
              <Link to='/'>Sponsorships</Link>
          </div>               
       </div>
       <div className='footer-link-wrap'>
          <div className='footer-link-items'>
              <h2>Vidoes</h2>
              <Link to='/'>Submit Videos</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Agency</Link>
              <Link to='/'>Influencer</Link>
          </div>   
          <div className='footer-link-items'>
              <h2>Socail Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
          </div>               
       </div>
    </div>
    <section className='social-media'>
       <div className='social-media-wrap'>
          <div className='footer-logo'>
             <Link to='/' classname='social-logo'>
             <span style={{color: "#D4A20D"}}>Trip</span>wow <GiElephantHead style={{color: "#D4A20D" }}/>
             </Link>                 
          </div>
          <small className='Website-rights'>Tripwow©2022</small>
          <div className='social-icons'>
               <Link
                 className='social-icon-link facebook'
                 to='/'
                 target='_blank'>
                <i className='fab fa-facebook-f' style={{color: "#4267B2" }} />  
                 </Link>   
                 <Link
                 className='social-icon-link instagram'
                 to='/'
                 target='_blank'>
                 <i className='fab fa-instagram' style={{color: "#8a3ab9" }} />  
                 </Link>  
                 <Link
                 className='social-icon-link Youtube'
                 to='/'
                 target='_blank'>
                <i className='fab fa-youtube' style={{color: "#FF0000" }} />  
                 </Link>  
                 <Link
                 className='social-icon-link twitter'
                 to='/'
                 target='_blank'>
            <i className='fab fa-twitter' style={{color: " #00acee" }} />  
                 </Link>  
                 <Link
                 className='social-icon-link googleplus'
                 to='/'
                 target='_blank'>
            <i className='fab fa-google-plus' style={{color: "#db4a39" }} />  
                 </Link>                     
          </div>
       </div>
    </section>
  </div>
 
  );
};

export default Footer;
