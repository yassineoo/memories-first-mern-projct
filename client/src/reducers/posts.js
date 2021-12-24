export default (posts =[] , action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload ;   
            break;
        case 'CREATE':
             return [...posts , action.payload ];   
             break;
        case 'UPDATE':
        return posts.map((post)=>(post._id===action.payload._id)? action.payload:post);   
        break;
        default:
             return posts;
            break;
    }
}