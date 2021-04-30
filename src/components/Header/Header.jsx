import React from 'react';
// import HeaderImg from '../img.png';
import classes from './Header.module.css';

// создаём функцию, которая возвращает jsx разметку
const Header = () => {
    return <header className={classes.header}>
        {/* <img src="./img.png" alt=""/> */}
            <div className={classes.img}></div>
        </header>
};

export default Header;