import React from "react";
import Post from "./post/post.js";
import useStyles from './styles.js';

const Posts = ()=> {
    const classes = useStyles();
    return (
        
        <h1> Posts
        <Post />
        <Post />
        </h1>
    )

}
export default Posts;
