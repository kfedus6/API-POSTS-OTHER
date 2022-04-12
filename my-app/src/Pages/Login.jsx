import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');
   const location = useLocation();
   const { signin } = useAuth();
   const navigate = useNavigate();

   const authorization = () => {
      signin(login, password, () => {
         navigate(location.state.from, { replace: true })
      })
   }

   return (
      <div>
         <input onChange={(e) => setLogin(e.target.value)} type="text" placeholder='Введите логин' />
         <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Введите пароль' />
         <button onClick={authorization}>Войти</button>
      </div>
   )
}

export default Login;