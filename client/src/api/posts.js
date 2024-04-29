import axios from './axios.js'

export const getPostsReq = () => axios.get('/posts');

export const getPostReq = (id) => axios.get(`/posts/${id}`);

export const createPostReq = (post) => axios.post('/post', post);

export const updatePostsReq = (post) => 
axios.put(`/posts/${post._id}`);

export const deletePostsReq = (id) => axios.delete(`/posts/${id}`);

