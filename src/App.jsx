import { useState, useEffect } from 'react';
import Stories from './components/Stories.jsx';
import page from './components/FeedPage.module.scss';
import stateStyles from './components/StatusMessage.module.scss';
import FeedList from './components/FeedList.jsx';

const PER_PAGE = 2;

const App = () => {

  // 데이터배열을 상태로 관리
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(() => localStorage.getItem('lastUser'));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [nextPage, setNextPage] = useState(null);

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
        ? `http://localhost:3001/posts?username=${selectedUser}&${condition}`
        : `http://localhost:3001/posts?${condition}`;
      
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`서버가${res.status}로 답했어요`);
        }
        const envelope = await res.json();
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

  // 삭제신호를 울릴 수 있는 진동벨 함수를 내린다.
  const handleDelete = (id) => {
    // 지운다는 것은 -> 필터링한다는 것
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleSelectUser = (username) => {
    // console.log('스토리쪽으로 진동벨 전달~', username);
    // console.log('현재 선택된 유저: ', selectedUser);
    // console.log('지금 막 선택한 유저: ', username);
    setSelectedUser((current) => (current === username ? null : username));
    setPageNumber(1);
    setPosts([]);
  };

  const handleLoadMore = () => {
    setPageNumber((current) => current + 1);
  };

  return (
    <main className={page.mainContent}>
      <Stories onSelect={handleSelectUser} />

      {error ? (
        <p className={stateStyles.errorText}>{error}</p>
      ) : (
        <>
          <FeedList
            posts={posts}
            isLoading={isLoading}
            onDelete={handleDelete}
          />
          {nextPage && !isLoading && (
            <button
              type='button'
              onClick={handleLoadMore}>
              더 보기
            </button>
          )}
        </>
      )}
    </main>
  );
};

export default App;
