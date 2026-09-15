import { useState, useEffect, useRef } from 'react';
import Stories from './components/Stories.jsx';
import page from './components/FeedPage.module.scss';
import stateStyles from './components/StatusMessage.module.scss';
import FeedList from './components/FeedList.jsx';
import CreateFeedModal from './components/CreateFeedModal.jsx';
import { usePosts } from './hooks/usePosts.js';
import UserSearch from './components/UserSearch.jsx';

import { PostsContext } from './contexts/PostsContext.jsx';

const App = () => {
  
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // 창고에 담기 위해 묶음을 우선 저장
  const postsStore = usePosts();

  const {
    posts,
    isLoading,
    error,
    loaderRef,
    addPost,
    removePost,
    countUpComment,
    selectUser,
  } = postsStore;
  
  return (
    <PostsContext value={postsStore}>
      <main className={page.mainContent}>
        <button
          type='button'
          onClick={() => setIsCreateOpen(true)}>
          새 게시물
        </button>

        <UserSearch onSearch={selectUser} />

        <Stories onSelect={selectUser} />

        {error ? (
          <p className={stateStyles.errorText}>{error}</p>
        ) : (
          <>
            <FeedList
              onDelete={removePost}
              onAddComment={countUpComment}
            />
          </>
        )}

        {isCreateOpen && (
          <CreateFeedModal
            onClose={() => setIsCreateOpen(false)}
            onCreate={addPost}
          />
        )}
      </main>
    </PostsContext>
  );
};

export default App;
