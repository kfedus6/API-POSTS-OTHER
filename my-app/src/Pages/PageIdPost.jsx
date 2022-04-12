import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import MyButton from '../Components/UI/MyButton/MyButton';
import { useFetching } from '../hooks/useFetching';

function PageIdPost() {
   const { id } = useParams();
   const navigate = useNavigate();
   const [post, setPost] = useState({});
   const [comments, setComments] = useState([]);

   const [fetchPostById, isLoading, error] = useFetching(async (id) => {
      const response = await PostService.getById(id);
      setPost(response.data);
   })

   const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
   })

   useEffect(() => {
      fetchPostById(id);
      fetchComments(id)
   }, [])

   return (
      <div style={{ width: '960px', marginTop: '10px' }}>
         <h1>Ви відкрили сторінку з ID = {id}</h1>
         {isLoading
            ? <Loader />
            : <div style={{ marginTop: '10px' }}><strong>{post.id}. {post.title}</strong></div>
         }
         <h2 style={{ marginTop: '10px' }}>
            Коментарій
         </h2>
         {isComLoading
            ? <Loader />
            : <div>
               {comments.map(comm => {
                  return (
                     <div style={{ marginTop: '15px' }}>
                        <h4>{comm.email}</h4>
                        <span >{comm.body}</span>
                     </div>
                  )
               })}
            </div>
         }
         <div style={{ marginTop: '15px' }}>
            <MyButton onClick={() => navigate(-1)}>Вийти</MyButton>
         </div>
      </div>
   )
}

export default PageIdPost;