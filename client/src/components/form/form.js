import React , {useState,useEffect} from "react";
import { TextField,Button , Paper ,Typography, ClickAwayListener } from "@material-ui/core";
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import FileBase from  'react-file-base64';
import {createPost,updatePost} from '../../actions/posts.js'
 //import { handle } from "express/lib/application";
 
const Form = ({currentId,setCurrentId})=> {
    
    const classes = useStyles();
    const dispatch = useDispatch()
    const [postData,setPostData] = useState({
         title:'', tags : '', selectedFile:'',message:'' });
   
    const post = useSelector((state)=> currentId? state.posts.find((post)=> post._id==currentId):null);
    const user = JSON.parse( localStorage.getItem('profile'));

    useEffect(()=>{
        if (post ) setPostData(post);

    },[post])
    const handleSubmit = (e)=>{
        e.preventDefault();
       if(currentId){
         console.log('submit error  ' , postData);

         updatePost(currentId,postData )(dispatch);
        
       }
       else{
           createPost({...postData , name : user?.result?.name})(dispatch);

       }
       clear();
        


    }
    const clear = ()=>{
        
        setCurrentId(null);
        setPostData({
             title:'', tags : '', selectedFile:'',message:'' })
    }

    if(!user ){
        return (
            <Paper className={classes.paper}>
            <Typography variant='h6' align="center">
               please sign in first to create your own memories and like others
            </Typography>
            </Paper>
        )
    }
    return (
        <Paper className={classes.paper}>
                <form autoComplete = 'off'  noValidate className={`${classes.root} ${classes.Form} `} onSubmit={handleSubmit} >
           
           <Typography variant='h6' align="center">{currentId? 'Editing':'Creating' } a memory</Typography>    
            <TextField  name = 'title' variant = 'outlined' fullWidth label = 'title' value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})} />
            <TextField  name = 'message' variant = 'outlined' fullWidth label = 'message' value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})} />
           <TextField  name = 'tags' variant = 'outlined' fullWidth label = 'tags' value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})} />
           
                      <div className={classes.input}>
            <FileBase type='file' multipe = {false} onDone = {({base64})=> {setPostData({...postData,selectedFile:base64})}}/>
            </div>
           
          
            <Button className={classes.buttonSubmit } variant='contained' size="large" color ='primary' type="submit" fullWidth> submit</Button>    
            <Button variant='contained' size="large" color ='secondary' onClick={clear} fullWidth> clear</Button>    

        </form>

    </Paper>
    )

}
export default Form;
