import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
   const [persone, setPersone] = useState('');
   const [accounts, setAccounts] = useState([
      { login: 'kolya', password: '1111', status: 'admin' },
      { login: 'egor', password: '1111', status: 'user' }
   ])

   const [number, setNumber] = useState(2);

   const signin = (login, password, cbTo) => {

      const account = accounts.filter(account => account.login === login && account.password === password);
      if (account.length === 0) {
         setNumber(number - 1)
         alert(`У вас ${number} спроб`)
      } else {
         setNumber(3)
         setPersone(login)
      }
      cbTo()
   }

   return <AuthContext.Provider value={{ persone, accounts, number, signin }}>
      {children}
   </AuthContext.Provider>
}

export default AuthProvider;