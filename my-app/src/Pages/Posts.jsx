import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import PostsList from '../Components/PostsList';
import PostForm from '../Components/PostForm';

const Posts = () => {
   const [posts, setPosts] = useState([]);

   const loadPosts = async () => {
      const data = await PostService.getPosts();
      setPosts(data);
   }
   useEffect(() => {
      loadPosts();
   }, [])

   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   const createPost = (newPost) => {
      setPosts([...posts, newPost]);
   }

   return (
      <div className='app'>
         <PostForm createPost={createPost} />
         <PostsList posts={posts} removePost={removePost} title='Пости про React' />
      </div>
   )
}

export default Posts;