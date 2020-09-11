import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <h1>Online Class Websit</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/course">Course</a>
                <a href="/information">Information</a>
            </nav>
        </div>
    );
};

export default Header;