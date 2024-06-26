import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getPosts, getPost,createPost,updatePost,deletePost } from "../controllers/post.controller.js";
import { createPostSchema } from "../schemas/post.schema.js";
import { validateSchema } from "../middlewares/validator.middelware.js";

const router = Router()

//Rutas de CRUD POST
router.get('/posts', authRequired, getPosts)
router.get('/posts/:id', authRequired, getPost) //obtener una solo post por id
router.post('/post', authRequired, validateSchema(createPostSchema), createPost)
router.delete('/posts/:id', authRequired, deletePost)
router.put('/posts/:id', authRequired, updatePost) //pra actualizar post


export default router