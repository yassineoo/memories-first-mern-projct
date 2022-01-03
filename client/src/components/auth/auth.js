import React,{useState} from 'react';
import {Button , Grid , Avatar , Typography,Paper ,Container} from '@material-ui/core';
import useStyles from './styles.js';
import {GoogleLogin} from 'react-google-login';
import Input from './input.js';
import Icon from './icon.js';
import {signUp ,signIn} from '../../actions/auth.js'
import { useNavigate} from "react-router-dom";
import {AUTH} from '../../constants/actionTypes.js'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useDispatch } from 'react-redux';
const initialState ={firstName : '' , lastName: '' , email : '' , password : '' , confirmePassword:'' };
 
const Auth = () => {
    
   const [dataForm , setDtatForm] = useState(initialState)
    const navigate= useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    console.log(showPassword);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isSignUp,setIsSignUp]= useState(false);

    const handleSubmit = (e) => {
            e.preventDefault();
            console.log(dataForm);
            console.log('submit');
            if(isSignUp){
                console.log('form1 ' , dataForm ,' ----');
                  signUp(dataForm,navigate)(dispatch);
            }
            else{
                console.log('form 2' , dataForm ,' ----');
                signIn(dataForm,navigate)(dispatch);
            }
    }
    
    const handleChange = (e) => {
        setDtatForm({...dataForm ,[e.target.name]:e.target.value});
        console.log(e.target.name,'******',e.target.value);
    }
    
    const handleShowPassword= () =>  setShowPassword((prev) => ! prev)
     const   googleSucces = async(res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            await dispatch({type : AUTH , payload : {result , token}});
            navigate('/');
        } catch (error) {
            console.log(error)
        }
     }
      const  googleFailure = (err) => {
            console.log('somthog goes wrong, try later ' ,err );
      }

    return (
                <Container component='main' maxWidth = 'xs'>
                    <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar} >
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant='h5' > {isSignUp?'Sign Up':'Sign In'}</Typography>
                    <form  className={classes.form} onSubmit={handleSubmit} >
                            <Grid container spacing={3} columnSpacing={2} alignItems='space-between'>
                                    { isSignUp && (
                                        <>
                                        <Input name = "firstName" label = 'First Name ' handleChange={handleChange} autoFocus half/>
                                        <Input name = "lastName" label = 'Last Name ' handleChange={handleChange}  half/>
                                        </>
                                    )}
                                    <Input name = "email" label = 'Email Adress ' handleChange={handleChange} type = 'email' />
                                    <Input name = "password" label = 'Password ' handleChange={handleChange} type = {showPassword ? 'text ' : 'password'}  handleShowPassword={handleShowPassword}/>
                                       { isSignUp && (
                                        <Input name = "confirmePassword" label = 'Renter The Password ' handleChange={handleChange}  type ='password' />
                               
                                        )}
                                
                                        <Button className={classes.submit} variant="conatined" color ="secondary" fullWidth  type="submit"> 
                                        {isSignUp?'Sign Up':'Sign In'}
                                        </Button>
                                        <GoogleLogin
                                            clientId='898519182406-pdk2vmavl65mm4iv4i0j66m5ucn9iu7s.apps.googleusercontent.com'
                                            render={(renderProps) => (
                                                <Button className={classes.googleButton} color='primary'  onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} fullWidth variant='contained'>Google Sign In</Button>
                                            )}
                                            onSuccess ={ googleSucces}
                                            onFailure = {googleFailure}
                                        />
                                       <Button fullWidth className ={classes.switch} onClick ={()=> {  setDtatForm (initialState);
                                                                                     setIsSignUp((prevIsSignup) => !prevIsSignup);
                                                                                    setShowPassword(false);
                                                                                  }}
                                                 variant= 'contained'> Don't have account click to {isSignUp?'Sign Up':'Sign In'}</Button>
                            
                                </Grid>
                    </form>
                    </Paper>
                </Container>

    )
}
export default Auth;
//898519182406-pdk2vmavl65mm4iv4i0j66m5ucn9iu7s.apps.googleusercontent.com