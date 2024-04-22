import Post from '../models/post.model.js'

export const getPosts = async (req,res)=>{
   const posts = await Post.find()
   res.json(posts)
};

export const createPost = async (req,res)=>{
    const { title, description, image, date} = req.body
    const newPost = new Post({
        title,
        description,
        image,
        date
    })
   const savedPost = await newPost.save()
   res.json (savedPost)
};

export const getPost = async (req,res)=>{
    const post = await Post.findById(req.params.id) //este valor es básicamente lo que se ponga en la url del router
    if (!post)return res.status(404).json({message: 'Post not found'})
    res.json(post)
};

export const updatePost = async (req,res)=>{
    const postUpdated = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    }) 
    if (!postUpdated)return res.status(404).json({message: 'Post not found'})
    res.json(postUpdated)
};

export const deletePost = async (req,res)=>{
    const postDeleted = await Post.findByIdAndDelete(req.params.id) 
    if (!postDeleted)return res.status(404).json({message: 'Post not found'})
    res.json(postDeleted)
};
