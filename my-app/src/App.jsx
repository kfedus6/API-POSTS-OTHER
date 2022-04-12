import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Posts from './pages/Posts';
import About from './pages/About';
import PageIdPost from './pages/PageIdPost';
import Login from './pages/Login';
import AuthProvider from './hoc/AuthProvider';
import ReqiureAuth from './hoc/ReqiureAuth';

const App = () => {
   return (
      <AuthProvider>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<About />} />
               <Route exact path='posts' element={
                  <ReqiureAuth>
                     <Posts />
                  </ReqiureAuth>
               } />
               <Route exact path='pageIdPost/:id' element={<PageIdPost />} />
               <Route path='login' element={<Login />} />
            </Route>
         </Routes>
      </AuthProvider>
   )
}

export default App;