import react , {useEffect,useState} from "react";
import {Container, AppBar , Grid, Typography, Grow  } from "@material-ui/core";
import memories from './images/memories.png';
import Posts from './components/posts/posts.js';
import Form from './components/form/form.js';
import { useDispatch } from "react-redux";
import useStyles from './styles.js';
import {getPosts } from './actions/posts.js';

const App = ()=> {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [currentId, setCurrentId]= useState(null);
    console.log('apphi  ', currentId)
     useEffect(()=>{
     getPosts()(dispatch);
  },[dispatch , currentId])

    return (
        <Container maxidth = 'lg'>
        
        <AppBar className={classes.AppBar} position= 'center' color= 'inherit' >
       
        <Typography lassName={classes.heading} variant='h2' align ='center' >
           memories
           <img lassName={classes.img} src={memories} alt ='memories' height ='60'></img>
        </Typography>
        
         </AppBar>
       <Grow in>
         <Container >
                <Grid container  justify='space-between' alignItems='stretch' spacing={4} >
           
                    <Grid item xs={12} sm={7}>
                         <Posts  setCurrentId={setCurrentId} /> 
                    </Grid>

                     <Grid item xs={12} sm={4}>
                         <Form currentId= {currentId}  setCurrentId={setCurrentId}/>
                    </Grid>
           
                </Grid>
         </Container>


       </Grow>

        </Container>
    )

}
export default App;