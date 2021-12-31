import * as api from '../api/index.js'
import { FETCH_ALL , CREATE ,UPDATE ,DELETE,LIKE } from "../constants/actionTypes";
export const getPosts=()=> async(dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        dispatch( {type:FETCH_ALL, payload:data})
    } catch (error) {
         console.log(error);

        
    }
    
}

export const createPost =(post)=> async(dispatch)=>{
    try {
    
        const  {data}= await api.createPost(post);
        dispatch({type:CREATE , payload:data});


    } catch (error) {
        console.log(error);
    }

}

export const updatePost =(id,updatePost)=> async (dispatch)=>{
    try {
        console.log('updated trgerd  : ',updatePost) ;
        const {data}= await api.updatePost(id,updatePost);
        console.log(data);
        dispatch({type:UPDATE , payload:data})
    }
     catch (error) {
        console.log(error)
    }
}

export const deletePost =(id)=> async (dispatch)=>{
    try {
        console.log('deleted  trgerd  : ') ;
        const {data}= await api.deletePost(id);
        console.log(data);
        dispatch({type:DELETE , payload:id})
    }
     catch (error) {
        console.log(error)
    }
}

export const likePost =(id)=> async (dispatch)=>{
    try {
        
        const {data}=  await api.likePost(id);
         dispatch({type:LIKE, payload:data})
    }
     catch (error) {
        console.log(error)
    }
}