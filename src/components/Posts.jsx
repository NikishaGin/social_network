import React from 'react';
import {Post} from "./Post";

export const Posts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post/>
            </div>
        </div>
    );
};

