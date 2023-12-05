import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email cannot be empty');
    const [passwordError, setPasswordError] = useState(
        'Password cannot be empty',
    );
    const [formValid, setFormValid] = useState(false);

    const saveLoginInfo = () => {
        const timestamp = Date.now();
        const info = { email, password, timestamp };
        localStorage.setItem('loginInfo', JSON.stringify(info));
    };

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

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
            const storedInfo = localStorage.getItem('loginInfo');
            if (storedInfo) {
                localStorage.removeItem('loginInfo');
            }
        }

        setEmail('');
        setPassword('');
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!re.test(String(e.target.value).toLocaleLowerCase())) {
            setEmailError('Incorrect email');
        } else {
            setEmailError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            default:
                break;
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 6 || e.target.value.length > 6) {
            setPasswordError('Password is incorrect');
            if (!e.target.value) {
                setPasswordError(
                    'The password must be at least 5 and no more than  characters',
                );
            }
        } else {
            setPasswordError('');
        }
    };

    return (
        <div className="App">
            <form onSubmit={submitForm}>
                <h1>Login vith email and password</h1>
                {emailDirty && emailError && (
                    <div style={{ color: 'red' }}>{emailError}</div>
                )}
                <input
                    onChange={(e) => emailHandler(e)}
                    value={email}
                    onBlur={(e) => blurHandler(e)}
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                />
                {passwordDirty && passwordError && (
                    <div style={{ color: 'red' }}>{passwordError}</div>
                )}
                <input
                    onChange={(e) => passwordHandler(e)}
                    value={password}
                    onBlur={(e) => blurHandler(e)}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                />
                <label className="container">
                    Remember me
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <span className="checkmark"></span>
                </label>
                <button disabled={!formValid} type="submit">
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

Login.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
};

export default Login;
