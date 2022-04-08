import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <div className='navbar'>
         <div>
            <h1>React Post API</h1>
         </div>
         <div className='navbar__menu'>
            <NavLink to='/'>Про сайт</NavLink>
            <NavLink to='/posts'>Пости</NavLink>
         </div>
      </div>
   )
}

export default Header;