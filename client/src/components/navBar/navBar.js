import {useState ,useEffect} from "react";
import { AppBar , Avatar, Button, Typography,Toolbar } from "@material-ui/core";
import {Link, useNavigate , useLocation} from "react-router-dom";
import  useStyles from './styles.js';
import jwt_decode from 'jwt-decode';
import {LOGOUT} from '../../constants/actionTypes.js'
import {useDispatch} from "react-redux";
import memories from '../../images/memories.png';
const  NavBar = ()=>{
    const location = useLocation();
    const  dispatch = useDispatch();
    const classes=useStyles();
    const navigate = useNavigate();
    const [user ,setUser] = useState(JSON.parse( localStorage.getItem('profile'))) ; 
    useEffect(() => {
      const  token = user?.token;
      if (token){
          const data = jwt_decode(token)
        if ( data.exp *1000 < new Date().getTime() ) logOut();
      }
      setUser(JSON.parse( localStorage.getItem('profile')));
    } ,[location])
    const logOut = async () => {
      console.log('bye');
      try {
            dispatch ({type : LOGOUT , payload :user?.token});
            setUser(null);   
            navigate('/auth');  
           
      } catch (error) {
            console.log(error)
      }
    }
    return (
                
        <AppBar className={classes.appBar} position= 'center' color= 'inherit' >
       <div className={classes.brandContainer}>
        <Typography  component={Link} to='/' variant='h3' className={classes.heading}  align ='center' >
          Memories
           <img className={classes.image} src={memories} alt ='memories' height ='60'></img>
        </Typography>
        </div >
            <Toolbar className={classes.toolbar} xs={12} sm={6}>
                  {user?(
                        <div className={classes.profile}>
                          <Avatar className={classes.purple} alt={user.result.name } src ={user.result.imageUrl}> {user.result.name.charAt(0)}
                          </Avatar>
                          <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                          <Button variant="contained" className={classes.logOut} color='secondary' onClick={logOut}>logOut</Button>
                        </div>
                  ):(
                          <Button  component={Link} to='/auth' variant='contained' className={classes.logIn}  color ='secondary'>logIn</Button>
                  )}
            </Toolbar >
         </AppBar>
        )

}

export default NavBar;