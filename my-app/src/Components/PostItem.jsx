import React from 'react';
import MyButton from './UI/MyButton/MyButton';

const PostItem = (props) => {
   return (
      <div className='post'>
         <div className='post__content'>
            <strong>{props.number}. {props.post.title}</strong>
            <div>
               {props.post.body}
            </div>
         </div>
         <div className='post__remove'>
            <MyButton onClick={() => props.removePost(props.post)}>
               Видалити
            </MyButton>
         </div>
      </div>
   )
}

export default PostItem;