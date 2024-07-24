import React from 'react';
import classes from "../App.module.css";

export const Nav = () => {
    return (
        <nav className={classes.nav}>
            <li>Profile</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
        </nav>
    );
};

