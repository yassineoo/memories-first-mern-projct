import React from 'react';
import {useState , useEffect} from 'react';
import { Grid , Grow ,Container} from '@material-ui/core';
import Posts from '../posts/posts.js';
import Form from '../form/form.js';
import {getPosts} from '../../actions/posts.js';  
import useStyles from './styles.js';
import { useDispatch } from "react-redux";
const Home = ()=> {
    const classes = useStyles();
    console.log('hiiiiiii')
    const dispatch = useDispatch();
    const [currentId, setCurrentId]= useState(null);

        useEffect(()=>{
        getPosts()(dispatch);
        },[dispatch , currentId])
    return(
        <Grow in>
         <Container >
                <Grid container   className={classes.mainCon}  justify='space-between' alignItems='stretch' spacing={4} >
           
                    <Grid item xs={12} sm={7}>
                         <Posts  setCurrentId={setCurrentId} /> 
                    </Grid>

                     <Grid item xs={12} sm={5}>
                         <Form currentId= {currentId}  setCurrentId={setCurrentId}/>
                    </Grid>
           
                </Grid>
         </Container>


       </Grow>

        )
}
export default Home;