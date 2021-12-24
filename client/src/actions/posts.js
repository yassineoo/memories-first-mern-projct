import * as api from '../api/index.js'

export const getPosts=()=> async(dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        dispatch( {type:'FETCH_ALL' , payload:data})
    } catch (error) {
         console.log(error);

        
    }
    
}

export const createPost =(post)=> async(dispatch)=>{
    try {

        const  {data}= await api.createPost(post);
        dispatch({type:'CREATE' , payload:data});


    } catch (error) {
        console.log(error);
    }

}

export const updatePost =(id,updatePost)=> async (dispatch)=>{
    try {
        
        const {update}= await api.updatePost(id,updatePost);
        dispatch({type:'UPDATE' , payload:update})
    } catch (error) {
        console.log(error)
    }


}