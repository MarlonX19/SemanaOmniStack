import React, { useState } from 'react';
import Css from './Login.css';

import logo from '../assets/logo.svg';

export default function Login() {
    const [ username, setUsername ] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(username);
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
            <img src={logo} alt="Tindev"/>
            <input
            placeholder="Digite seu usuário do github"
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            <button type="submit">Entrar</button>
            </form>
        </div>
    );
}