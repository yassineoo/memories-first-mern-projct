import * as api from '../api/index.js'
import { AUTH } from "../constants/actionTypes";

export const signUp=(compte, navigate)=> async(dispatch)=>{
    try {
       
        const  {data}= await api.signUp(compte);
        dispatch({type:AUTH , payload:data});
        console.log(data)
        navigate('/');
    } catch (error) {
         console.log(error);   
    }
    
}
export const signIn=(compte, navigate)=> async(dispatch)=>{
    try {
        console.log('action');
        const  {data}= await api.signIn(compte);
        dispatch({type:AUTH , payload:data});
        navigate('/');
    } catch (error) {
         console.log(error);   
    }
    
}

