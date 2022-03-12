import React from 'react';
import'../../App.css';
import prodvideo from '../../naturevd/natv1.mp4';

function Product(){
     return(
     <>
     <video src={prodvideo} autoPlay loop muted className='prodv'/>
     <h1 className='products'>Products</h1>
     </>)
      }

export default Product;      