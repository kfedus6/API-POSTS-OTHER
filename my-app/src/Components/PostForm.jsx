import React, { useState } from 'react'

const PostForm = ({ createPost }) => {
   const [post, setPost] = useState({ title: '', body: '', id: '' });

   const addNewPost = (e) => {
      e.preventDefault();
      createPost(post);
      setPost({ title: '', body: '', id: '' })
   }

   return (
      <form>
         <input
            type="text"
            placeholder='Назва поста'
            className='title__post'
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
         />
         <input
            type="text"
            placeholder='Опис поста'
            className='description__post'
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
         />
         <button className='create__post' onClick={addNewPost}>Создати пост</button>
      </form>
   )
}

export default PostForm;