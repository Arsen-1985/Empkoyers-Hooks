import React, { useState } from 'react';
import Login from './Login';
import App from './App';

const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (info) => {
        setEmail(info.email);
        setPassword(info.password);
    };

    if (email === '' && password === '') {
        return <Login onLogin={handleLogin} />;
    } else if (email === 'ars@gmail.com' && password === '111111') {
        return <App />;
    } else {
        localStorage.removeItem('loginInfo');
        return 'Error';
    }
};

export default Home;
