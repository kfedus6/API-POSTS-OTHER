import React from 'react';
import cl from '../SelectPosts/SelectPosts.module.css';

const SelectPosts = ({ options, defaultValue, value, onChange }) => {
   return (
      <select className={cl.select__posts} value={value} onChange={e => onChange(e.target.value)}>
         <option disabled value="">{defaultValue}</option>
         {options.map(option => {
            return <option key={option.value} value={option.value}>
               {option.name}
            </option>
         })}
      </select>
   )
}

export default SelectPosts;