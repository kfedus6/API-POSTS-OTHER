import React from 'react';
import MyButton from './UI/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
   const navigate = useNavigate();

   return (
      <div className='post'>
         <div className='post__content'>
            <strong>{props.number}. {props.post.title}</strong>
            <div>
               {props.post.body}
            </div>
         </div>
         <div className='post__btn'>
            <MyButton onClick={() => navigate(`/pageIdPost/${props.post.id}`)}>Посмотреть</MyButton>
            <MyButton onClick={() => props.removePost(props.post)}>
               Видалити
            </MyButton>
         </div>
      </div>
   )
}

export default PostItem;