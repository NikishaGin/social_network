import React from 'react';
import classes from "../App.module.css";
import {Posts} from "./Posts";

export const Profile = () => {
    return (
        <main className={classes.main}>
            <div>
                <img src={''}/>
            </div>
            <div>ava + description</div>
            <Posts/>
        </main>
    );
};

