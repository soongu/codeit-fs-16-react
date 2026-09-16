// ~/instagram-react/src/lab/practice1.jsx
import { useState, useEffect } from 'react';

const NotificationBox = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost:3001/notifications');
        if (!response.ok) {
          throw new Error(`서버가${response.status}로 답했어요`);
        }
        setNotifications(await response.json());
      } catch (err) {
        console.error('알림을 가져오지 못했어요.', err);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  if (isLoading) {
    return <p>불러오는 중...</p>;
  }

  if (notifications.length === 0) {
    return<p>알림이 없습니다.</p>;
  }

  return (
    <ul>
      {notifications.map((item) => (
        <li key={item.id}>
          {item.username} — {item.text}
        </li>
      ))}
    </ul>
  );
};

export default NotificationBox;