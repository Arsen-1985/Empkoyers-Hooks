import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitThis = (e) => {
        e.preventDefault();

        const info = { email, password };
        onLogin(info);

        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <form onSubmit={submitThis}>
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
            </form>
        </div>
    );
};

export default Login;
