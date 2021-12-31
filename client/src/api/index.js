import axios from 'axios';

const url = 'http://localhost:8000/posts';
const Api = axios.create({baseURL:'http://localhost:8000/'})

Api.interceptors.request.use ( (req) => {
    if( localStorage.getItem('profile')) {
        req.headers.authorization  = `Bearer ${JSON.stringify((JSON.parse(localStorage.getItem('profile')).token))}`;
    }
    
    return req;
})
export const  fetchPosts = ()=> Api.get('/posts');
export const  createPost =(newPost)=> Api.post('/posts',newPost);
export const  updatePost = (id,updatePost)=> Api.patch(`/posts/${id}`,updatePost);
export const deletePost = (id)=> Api.delete(`/posts/${id}`);
export const  likePost = (id)=> Api.patch(`/posts/like/${id}`);
export const  signUp = (compte) => 
{ console.log('signUp ', compte);
    return Api.post('/users/up',compte);
}
export const  signIn = (compte) => Api.post('/users/in',compte);
 