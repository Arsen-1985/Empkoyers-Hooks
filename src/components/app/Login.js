import React, { useState, useEffect } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const saveLoginInfo = () => {
        const timestamp = Date.now();
        const info = { email, password, timestamp };
        localStorage.setItem('loginInfo', JSON.stringify(info));
    };

    useEffect(() => {
        const storedInfo = localStorage.getItem('loginInfo');

        if (storedInfo) {
            const {
                email: storedEmail,
                password: storedPassword,
                timestamp,
            } = JSON.parse(storedInfo);
            setEmail(storedEmail);
            setPassword(storedPassword);

            const twoHours = 2 * 60 * 60 * 1000;
            const elapsedTime = Date.now() - timestamp;

            if (elapsedTime < twoHours) {
                onLogin({ email: storedEmail, password: storedPassword });
            }
        }
    }, [onLogin]);

    const submitForm = (e) => {
        e.preventDefault();

        const info = { email, password };

        onLogin(info);

        if (rememberMe) {
            saveLoginInfo();
        } else {
            localStorage.removeItem('loginInfo');
        }

        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>

                <label className="container">
                    Remember Me
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <span className="checkmark"></span>
                </label>
            </form>
        </div>
    );
};

export default Login;
