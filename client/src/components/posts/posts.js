import React from "react";
import Post from "./post/post.js";
import useStyles from './styles.js';
import { useSelector } from "react-redux";
import { Grid,CircularProgress } from "@material-ui/core";

const Posts = ({setCurrentId})=> {
  const posts = useSelector((state)=> state.posts) 
    const classes = useStyles();
    return (
        !posts.length? <CircularProgress/>: 
        <Grid container className = {classes.container} spacing={3} alignItems="stretch">
            {
                posts.map((post)=>(
                    <Grid item key={post._id}  xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>

                ))
            }

        </Grid>
    )

}
export default Posts;
