import React from 'react';
import cl from '../Modal/Modal.module.css';

const Modal = ({ children, modal, setModal }) => {

   const rootClasses = [cl.modal];

   if (modal === true) {
      rootClasses.push(cl.act)
   }

   return (
      <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
         <div className={cl.modal__content} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div >
   )
}

export default Modal;