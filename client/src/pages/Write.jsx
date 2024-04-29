import { useState } from 'react';
//import ReactQuill from 'react-quill'; //library to write down and make the input to the blog
import 'react-quill/dist/quill.snow.css';
import { usePosts } from '../context/PostsContext';
import { useForm } from 'react-hook-form';


const Write = () => {
  //const { value, setValue } = useState('');
  const { register, handleSubmit } = useForm();
  const { createPost } = usePosts();
  
  //guarda los posts hechos
   const onSubmit = handleSubmit((data) => {
     createPost(data);
   });
  
  return (
    <div className='add'>
      <form className="content" onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder='Title' 
        name='title'
        {...register("title")}
        autoFocus 
        />
        <div className="editorContainer">
        <textarea
        name='description'
        {...register("description")} 
        />
        </div>
        <button>save</button>
      </form>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <input style={{display: 'none'}} type="file" id='file'  name='image'/>
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Upload</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name='cat' value="art" id='art' />
          <label htmlFor="art">Art</label>
          <input type="radio" name='cat' value="cinema" id='cinema' />
          <label htmlFor="cinema">Cinema</label>
          <input type="radio" name='cat' value="books" id='books' />
          <label htmlFor="books">Books</label>
          <input type="radio" name='cat' value="food" id='food' />
          <label htmlFor="food">Food</label>
          <input type="radio" name='cat' value="design" id='design' />
          <label htmlFor="design">Design</label>
        </div>
      </div>
    </div>
  )
}

export default Write