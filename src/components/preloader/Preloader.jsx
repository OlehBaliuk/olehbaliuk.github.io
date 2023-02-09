import React from 'react';
import loading from '../../images/loading.svg';
import './index.scss';

const Preloader = () => {
    return <img className="preloader" src={loading} alt="preloader" />;
};

export default Preloader;
