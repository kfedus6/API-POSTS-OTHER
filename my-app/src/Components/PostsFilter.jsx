import React from 'react';
import InputSearch from './UI/InputSearch/InputSearch';
import SelectPosts from './UI/SelectPosts/SelectPosts';

const PostsFilter = ({ filter, setFilter }) => {
   return (
      <div>
         <InputSearch
            value={filter.query}
            onChange={e => setFilter({ ...filter, query: e.target.value })}
            placeholder='Пошук'
         />
         <SelectPosts
            value={filter.sort}
            onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
            defaultValue="Сортувати"
            options={[{ value: 'title', name: 'По назві' }, { value: 'body', name: 'По опису' }]}
         />
      </div>
   )
}

export default PostsFilter;