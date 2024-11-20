import React, { useState } from 'react';
import Login from './Login.jsx';
import GameReview from './GameReview.jsx';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (credentials) => {
        if (credentials.username === "admin" && credentials.password === "admin") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <>
            {isLoggedIn ? (
                <GameReview />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </>
    );
}