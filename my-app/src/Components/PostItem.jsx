import React from 'react';
import ButtonRemove from './UI/ButtonRemove/ButtonRemove';

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
            <ButtonRemove onClick={() => props.removePost(props.post)}>
               Видалити
            </ButtonRemove>
         </div>
      </div>
   )
}

export default PostItem;