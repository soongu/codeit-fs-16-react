// ~/instagram-react/src/lab/practice2.jsx
import { useState, useEffect } from 'react';

const PostsByUser = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `http://localhost:3001/posts?username=${username}`,
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error(`서버가 ${response.status}로 답했어요`);
        }
        setPosts(await response.json());
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }
        console.error('게시물을 가져오지 못했어요.', err);
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    load();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [username]);

  if (isLoading) {
    return <p>불러오는 중...</p>;
  }

  if (posts.length === 0) {
    return <p>게시물이 없습니다.</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.content}</li>
      ))}
    </ul>
  );
};

export default PostsByUser;
