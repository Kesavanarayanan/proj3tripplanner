import React from 'react';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Product from './Components/Pages/Product';
import Service from './Components/Pages/Service';
import Signup from './Components/Pages/Signup';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
    
    <Routes>
       <Route path='/' exact  element={<Home/>}></Route>
       <Route path='products' element={<Product/>} />
       <Route path='services' element={<Service/>} />
       <Route path='sign-up' element={<Signup/>} />
     </Routes>
    </BrowserRouter>
      
  );
}

export default App;
