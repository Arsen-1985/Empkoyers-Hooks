import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import App from './App';
import News from './News';
import ResponsiveAppBar from './ResponsiveAppBar';

const Home = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (info) => {
        setEmail(info.email);
        setPassword(info.password);
    };

    const handleNavigation = (page) => {
        navigate(`/${page.toLowerCase()}`);
    };

    if (email === '' && password === '') {
        return <Login onLogin={handleLogin} />;
    } else if (email === 'ars@gmail.com' && password === '111111') {
        return (
            <>
                <ResponsiveAppBar onNavigate={handleNavigation} />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/home" element={<App />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </>
        );
    } else {
        localStorage.removeItem('loginInfo');
        return <Home />;
    }
};

export default Home;
