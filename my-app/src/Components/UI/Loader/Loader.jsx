import React from 'react';
import cl from '../Loader/Loader.module.css';

const Loader = () => {
   return (
      <div className={cl.loader__block}>
         <div className={cl.loader}></div>
      </div>
   )
}

export default Loader;