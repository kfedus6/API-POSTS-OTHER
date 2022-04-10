import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
         <TransitionGroup>
            {posts.map((item, index) => {
               return (
                  <CSSTransition key={index} timeout={1000} classNames='item'>
                     <PostItem post={item} removePost={removePost} number={index + 1} />
                  </CSSTransition>
               )
            })}
         </TransitionGroup>
      </div>
   )
}

export default PostsList;