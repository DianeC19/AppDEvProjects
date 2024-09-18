import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <h1>KeyTech</h1> {}
            <nav>
                <ul className="nav-list">
                    <li><a href="#documentation">Documentation</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
