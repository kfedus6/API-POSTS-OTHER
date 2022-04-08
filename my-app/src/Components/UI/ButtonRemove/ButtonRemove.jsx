import React from 'react';
import cl from '../ButtonRemove/ButtonRemove.module.css';

const ButtonRemove = ({ children, ...props }) => {
   return (
      <button {...props} className={cl.btn__remove}>
         {children}
      </button>
   )
}

export default ButtonRemove;