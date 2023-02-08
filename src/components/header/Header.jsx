import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">App</Link>
        </header>
    );
};

export default Header;
