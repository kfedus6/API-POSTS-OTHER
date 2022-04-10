import axios from 'axios';

class PostService {
   static async getPosts(limit, page) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
         params: {
            _limit: limit,
            _page: page
         }
      });
      return response
   }
}

export default PostService;