import { createContext, useContext } from 'react';
import { usePosts } from '../hooks/usePosts';

// 창고 만들기
export const PostsContext = createContext(null);

// 창고에 물건 넣는 일을 대행으로 맡기기
export const PostsProvider = ({ children }) => {
  const value = usePosts();
  return <PostsContext value={value}>{children}</PostsContext>;
};

// 창고에서 물건 꺼내는 일
export const usePostsContext = () => {
  const value = useContext(PostsContext);

  if (value === null) {
    throw new Error('usePostsContext는 PostsProvider 안에서만 쓸 수 있어요.');
  }

  return value;
};