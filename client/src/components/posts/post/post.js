import React from "react";
import useStyles from './styles.js';
import { Button , Card , CardActions ,CardMedia , CardContent , Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {deletePost , likePost} from '../../../actions/posts.js';
import { useDispatch } from "react-redux";

const Post = ({post,setCurrentId})=> {
    

    const dispatch = useDispatch();
    const classes= useStyles();
    
    const deleteP = (e)=>{
        e.preventDefault();
        deletePost(post._id)(dispatch);

    }
    const like= (e)=>{
        e.preventDefault();
        likePost(post._id )(dispatch);

    }

   
    return (
        <Card className={classes.card} post >
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay} >
                <Typography variant="h6" > {post.creator}</Typography>
                <Typography variant="body2" > {moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2} >
                <Button style={{color:"white"}} onClick={()=>
                {
         
                setCurrentId(post._id)
              

                } } size = 'small'>
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <div className={classes.details} >
                 <Typography variant="body2" color='textSecondary' component='h2' > {post.tags.map((tag)=>( '#'+tag+" "))}</Typography>
            </div>
            <Typography variant="body2" className={classes.title}  gutterBottom varient='h5' component='h2' > {post.title}</Typography>
         
            <CardContent>
            <Typography variant="body2"  color='textSecondary' gutterBottom > {post.message}</Typography>
         
           </CardContent>
            <CardActions>
                <Button color='primary' size="small" onClick={like} >
                    <ThumbUpAltIcon fontSize='small'/>
                    Like {post.likeCount}
                </Button>
                <Button color='primary' size="small" onClick={deleteP} >
                    <DeleteIcon fontSize='small'/>
                     Delete 
                </Button>
            </CardActions>

        </Card>

    )


}
export default Post;
