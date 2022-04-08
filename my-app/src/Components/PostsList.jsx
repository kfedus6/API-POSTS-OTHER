import React from 'react';
import PostItem from './PostItem';

const PostsList = ({ posts, title, removePost }) => {

   if (!posts.length) {
      return (
         <h2 className='dont__find'>
            Пости не знайдено!!!
         </h2>
      )
   }

   return (
      <div>
         <h2 className='title'>
            {title}
         </h2>
         {posts.map((item, index) => {
            return (
               <PostItem post={item} removePost={removePost} number={index + 1} key={index} />
            )
         })}
      </div>
   )
}

export default PostsList;