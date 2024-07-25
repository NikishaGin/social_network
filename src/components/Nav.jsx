import React from 'react';
import classes from "../App.module.css";
import {Link, Outlet} from "react-router-dom";
import {Header} from "./Header";


export const Nav = () => {
    return (
        <div className={classes.wrapper}>
            <Header/>
            <nav className={classes.nav}>
                <ul>
                    <li><Link to={'/'}>Profile</Link></li>
                    <li><Link to={'/messages'}>Messages</Link></li>
                    <li><Link to={'/news'}>News</Link></li>
                    <li><Link to={'/music'}>Music</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

