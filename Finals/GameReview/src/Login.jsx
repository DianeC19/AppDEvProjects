import React, { useState } from 'react';

export default function Login({ onLogin }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        onLogin({ username: userName, password });
    };

    return (
        <div className="login-container">
            <h1>Game Review</h1>
            <h4>Login to Continue:</h4>
            <label>
                Username:
                <input type="text" value={userName} onChange={handleUserNameChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>Login</button>
        </div>
    );
}