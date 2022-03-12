import React from 'react';
import '../../App';
import { Button } from '../Button/Button';
import './Headersection.css';
import headvideo from './natv3.mp4';





function Headersection() {
    return (
            <div className='hero-container'>
               <video src={headvideo} autoPlay loop muted />
               <h1>Adventure Here</h1>
               <p>Are You Ready !</p>
            <div className='hero-btns' >
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Lets Start</Button>                
           
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH NOW <i className='far fa-play-circle' /> </Button>                
             </div>                                         
             </div>
             );
}

export default Headersection
