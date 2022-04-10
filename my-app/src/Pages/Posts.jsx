import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import PostsList from '../Components/PostsList';
import PostForm from '../Components/PostForm';
import Modal from '../Components/UI/Modal/Modal';
import MyButton from '../Components/UI/MyButton/MyButton';
import PostsFilter from '../Components/PostsFilter';
import Loader from '../Components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount } from '../utils/pages';
import Pagination from '../Components/UI/Pagination/Pagination';

const Posts = () => {
   const [posts, setPosts] = useState([]);
   const [modal, setModal] = useState(false);
   const [filter, setFilter] = useState({ sort: '', query: '' });
   const [totalPages, setTotalPages] = useState(0);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);

   const sorteaAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

   const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
      const response = await PostService.getPosts(limit, page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit))
   })

   useEffect(() => {
      fetchPosts(limit, page);
   }, [])

   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false)
   }

   const changePage = (page) => {
      setPage(page);
      fetchPosts(limit, page)
   }

   return (
      <div className='app'>
         <MyButton onClick={() => setModal(true)} style={{ marginTop: '25px' }}>
            Создати пост
         </MyButton>
         <Modal modal={modal} setModal={setModal}>
            <PostForm createPost={createPost} />
         </Modal>
         <PostsFilter filter={filter} setFilter={setFilter} />
         {postsError &&
            <h1 className='error'>Произошла ошибка ${postsError}</h1>
         }
         {isPostsLoading
            ? <Loader />
            : <PostsList posts={sorteaAndSearchedPosts} removePost={removePost} title='Пости про React' />
         }
         <Pagination page={page} totalPages={totalPages} changePage={changePage} />
      </div>
   )
}

export default Posts;