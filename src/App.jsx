import { useState, useEffect } from "react";
import Stories from "./components/Stories.jsx";
import page from './components/FeedPage.module.scss';
import FeedList from "./components/FeedList.jsx";


const App = () => {

  // 데이터배열을 상태로 관리
  const [posts, setPosts] = useState([]);

  useEffect(() => { 
    const loadPosts = async () => { 
      try {
        const res = await fetch('http://localhost:3001/posts');
        if (!res.ok) {
          throw new Error(`서버가${res.status}로 답했어요`);
        }
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('게시물 주소가 잘못되었습니다.', error)
      }
    };

    loadPosts();
  }, []);

  // 삭제신호를 울릴 수 있는 진동벨 함수를 내린다.
  const handleDelete = (id) => { 
    // 지운다는 것은 -> 필터링한다는 것
    setPosts(posts.filter((post) => post.id !== id));
  };


  return (
    <main className={page.mainContent}>
      <Stories />
      <FeedList
        posts={posts}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default App;