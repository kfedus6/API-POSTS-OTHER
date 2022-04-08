import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Posts from './Pages/Posts';
import About from './Pages/About';

const App = () => {
   return (
      <Routes>
         <Route path='/' element={<Layout />}>
            <Route index element={<About />} />
            <Route path='posts' element={<Posts />} />
         </Route>
      </Routes>
   )
}

export default App;