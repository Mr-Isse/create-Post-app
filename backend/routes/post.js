import express from 'express';
import { createPost, deletePost, getUserPosts, updatePost } from '../controller/postController.js';
import { authanticate } from '../middleware/authmiddleware.js';
import upload from '../middleware/upload.js';



const postRouter= express.Router()
postRouter.post('/create-post', authanticate, upload.single('image'), createPost);
postRouter.get('/get-user-posts', authanticate, getUserPosts);
postRouter.delete('/delete-post/:id', authanticate, deletePost);
postRouter.post('/update-post/:id', authanticate, upload.single('image'), updatePost);


export default postRouter;