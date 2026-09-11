import { useState, useEffect, useRef } from 'react';
import Stories from './components/Stories.jsx';
import page from './components/FeedPage.module.scss';
import stateStyles from './components/StatusMessage.module.scss';
import FeedList from './components/FeedList.jsx';
import CreateFeedModal from './components/CreateFeedModal.jsx';
import api from './services/api.js';

const PER_PAGE = 2;

const App = () => {
  // 데이터배열을 상태로 관리
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(() =>
    localStorage.getItem('lastUser'),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [nextPage, setNextPage] = useState(null);

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // loading tag를 저장하기 위한 ref
  const loaderRef = useRef(null);

  useEffect(() => {
    if (selectedUser) {
      localStorage.setItem('lastUser', selectedUser);
    } else {
      localStorage.removeItem('lastUser');
    }
  }, [selectedUser]);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    const loadPosts = async () => {
      const condition = `_page=${pageNumber}&_per_page=${PER_PAGE}`;

      const url = selectedUser
        ? `/posts?username=${selectedUser}&${condition}`
        : `/posts?${condition}`;

      setIsLoading(true);
      setError(null);

      try {
        const res = await api.get(url, {
          signal: controller.signal,
        });
        
        const envelope = res.data;
        setPosts((current) => [...current, ...envelope.data]);
        setNextPage(envelope.next);
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }
        console.error('게시물 주소가 잘못되었습니다.', err);
        setError('게시물을 불러오지 못했습니다.');
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    loadPosts();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [selectedUser, pageNumber]);

  // 무한 스크롤 옵저버 처리
  useEffect(() => {
    if (nextPage === null || isLoading) {
      return;
    }

    const target = loaderRef.current;
    if (target === null) {
      return;
    }

    // 옵저버를 생성해서 감시를 맡김
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber((current) => current + 1);
      }
    });

    // 감시대상을 지정
    observer.observe(target);

    return () => observer.disconnect();
  }, [isLoading, nextPage]);

  // 삭제신호를 울릴 수 있는 진동벨 함수를 내린다.
  const handleDelete = async (id) => {
    // 백업
    const previous = posts;
    // 지운다는 것은 -> 필터링한다는 것
    setPosts(posts.filter((post) => post.id !== id));

    try {
      await api.delete(`/posts/${id}`);
    } catch (err) {
      console.error('게시물을 지우지 못했어요.', err);
      setPosts(previous);
    }
  };

  const handleSelectUser = (username) => {
    // console.log('스토리쪽으로 진동벨 전달~', username);
    // console.log('현재 선택된 유저: ', selectedUser);
    // console.log('지금 막 선택한 유저: ', username);
    setSelectedUser((current) => (current === username ? null : username));
    setPageNumber(1);
    setPosts([]);
  };

  // 댓글 개수 처리를 위한 진동벨 함수 생성
  const handleAddComment = (id) => {
    setPosts((current) =>
      current.map((post) =>
        post.id === id
          ? { ...post, commentCount: post.commentCount + 1 }
          : post,
      ),
    );
  };

  // 피드 생성 처리를 위한 진동벨 함수 생성
  const handleCreate = (createdPost) => {
    setPosts((current) => [createdPost, ...current]);
  };

  return (
    <main className={page.mainContent}>
      <button
        type='button'
        onClick={() => setIsCreateOpen(true)}>
        새 게시물
      </button>

      <Stories onSelect={handleSelectUser} />

      {error ? (
        <p className={stateStyles.errorText}>{error}</p>
      ) : (
        <>
          <FeedList
            posts={posts}
            isLoading={isLoading}
            onDelete={handleDelete}
            onAddComment={handleAddComment}
            loaderRef={loaderRef}
          />
        </>
      )}

      {isCreateOpen && (
        <CreateFeedModal
          onClose={() => setIsCreateOpen(false)}
          onCreate={handleCreate}
        />
      )}
    </main>
  );
};

export default App;
