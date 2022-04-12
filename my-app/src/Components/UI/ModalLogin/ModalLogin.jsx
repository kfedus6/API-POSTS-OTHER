import React, { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import cl from '../ModalLogin/ModalLogin.module.css';

const ModalLogin = () => {
   const [visible, setVisible] = useState(false);
   const { number } = useAuth();
   const classes = [cl.modalLog];
   if (visible === false && number === -1) {
      classes.push(cl.active)
   }

   return (
      <div className={classes.join(' ')}>
         <div className={cl.modalLog__content}>
            <h2>Доступ вам ограничен!!!</h2>
         </div>
      </div>
   )
}

export default ModalLogin;