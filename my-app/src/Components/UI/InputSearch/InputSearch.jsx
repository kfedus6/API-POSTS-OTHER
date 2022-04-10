import React from 'react';
import cl from '../InputSearch/InputSearch.module.css';

const InputSearch = (props) => {
   return (
      <input className={cl.input__search} {...props} ></input>
   )
}

export default InputSearch;