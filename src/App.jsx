import { useState, useEffect, useRef } from 'react';
import Stories from './components/Stories.jsx';
import page from './components/FeedPage.module.scss';
import stateStyles from './components/StatusMessage.module.scss';
import FeedList from './components/FeedList.jsx';
import CreateFeedModal from './components/CreateFeedModal.jsx';
import { usePosts } from './hooks/usePosts.js';

const App = () => {
  
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const {
    posts,
    isLoading,
    error,
    loaderRef,
    addPost,
    removePost,
    countUpComment,
    selectUser,
  } = usePosts();
  
  return (
    <main className={page.mainContent}>
      <button
        type='button'
        onClick={() => setIsCreateOpen(true)}>
        새 게시물
      </button>

      <Stories onSelect={selectUser} />

      {error ? (
        <p className={stateStyles.errorText}>{error}</p>
      ) : (
        <>
          <FeedList
            posts={posts}
            isLoading={isLoading}
            onDelete={removePost}
            onAddComment={countUpComment}
            loaderRef={loaderRef}
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
  );
};

export default App;
