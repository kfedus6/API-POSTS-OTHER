import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ModalLogin from '../Components/UI/ModalLogin/ModalLogin';
import MyButton from '../Components/UI/MyButton/MyButton';
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
      <>

         <div className='bloc__login'>
            <div>
               <h2>Авторизація</h2>
            </div>
            <input className='login' onChange={(e) => setLogin(e.target.value)} type="text" placeholder='Введите логин' />
            <input className='password' onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Введите пароль' />
            <MyButton onClick={authorization}>Войти</MyButton>
         </div>
         <div>
            <ModalLogin />
         </div>
      </>
   )
}

export default Login;