import { useState, useEffect } from 'react';
import Stories from './components/Stories.jsx';
import page from './components/FeedPage.module.scss';
import FeedList from './components/FeedList.jsx';

const App = () => {
  // 데이터배열을 상태로 관리
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadPosts = async () => {
      const url = selectedUser
        ? `http://localhost:3001/posts?username=${selectedUser}`
        : 'http://localhost:3001/posts';

      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`서버가${res.status}로 답했어요`);
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        if (error.name === 'AbortError') {
          return;
        }
        console.error('게시물 주소가 잘못되었습니다.', error);
      }
    };

    loadPosts();

    return () => {
      controller.abort();
    };
  }, [selectedUser]);

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
  };

  return (
    <main className={page.mainContent}>
      <Stories onSelect={handleSelectUser} />
      <FeedList
        posts={posts}
        onDelete={handleDelete}
      />
    </main>
  );
};

export default App;
