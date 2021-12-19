import react from "react";
import {Container, AppBar , Grid, Typography, Grow  } from "@material-ui/core";
import memories from './images/memories.png';
import Posts from './components/posts/posts.js';
import Form from './components/form/form.js';
const App = ()=> {
    return (
        <Container maxidth = 'lg'>
        
        <AppBar position= 'center' color= 'inherit' >
       
        <Typography variant='h2' align ='center' >
           memories
           <img src={memories} alt ='memories' height ='60'></img>
        </Typography>
        
         </AppBar>
       <Grow in>
         <Container >
             <Grid container  justify='space-between' alignItems='stretch' spacing={4} >
           
             <Grid item xs={12} sm={7}>
             <Posts/>
             </Grid>
             <Grid item xs={12} sm={4}>
             <Form/>
              </Grid>
           
             </Grid>
         </Container>


       </Grow>

        </Container>
    )

}
export default App;