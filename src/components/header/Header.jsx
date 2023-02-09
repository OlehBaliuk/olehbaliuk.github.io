import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './index.scss';

const Header = () => {
    return (
        <header className="header">
            <Link to={ROUTES.mainPage}>App</Link>
        </header>
    );
};

export default Header;
