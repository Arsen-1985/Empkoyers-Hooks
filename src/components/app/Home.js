import React, { useState } from 'react';
import Login from './Login';
import App from './App';
import { Route, Routes } from 'react-router-dom';
import News from './News';

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
        return (
            <Routes>
                <Route path="/" element={<App />} />
                <Route
                    path="/home/*"
                    element={
                        <Routes>
                            <Route index element={<App />} />
                        </Routes>
                    }
                />
                <Route path="/news" element={<News />} />
            </Routes>
        );
    } else {
        localStorage.removeItem('loginInfo');
        return <Home />;
    }
};

export default Home;
