import axios from 'axios';

const url = 'http://localhost:3000/posts';

export const  fetch = ()=> axios.get(url);
