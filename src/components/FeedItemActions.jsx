// ~/instagram-react/src/components/FeedItemActions.jsx
import { useState } from "react";
import styles from './FeedItem.module.scss';


const FeedItemActions = ({ likeCount }) => {

  const [like, setLike] = useState({
    liked: false,
    count: likeCount
  });

  const handleLike = () => {
    setLike({
      ...like,
      liked: !like.liked,
      count: like.liked ? like.count - 1 : like.count + 1
    });
  };

  return (
    <div className={styles.actions}>
      <div className={styles.actionButtons}>
        <div className={styles.leftButtons}>
          <button
            type='button'
            className={styles.actionButton}
            onClick={handleLike}
          >
            {like.liked ? "♥" : "♡"}
          </button>
          <button
            type='button'
            className={styles.actionButton}>
            💬
          </button>
          <button
            type='button'
            className={styles.actionButton}>
            ↗
          </button>
        </div>
        <button
          type='button'
          className={styles.actionButton}>
          🔖
        </button>
      </div>
      <div className={styles.likes}>
        좋아요 <span>{like.count.toLocaleString()}</span>개
      </div>
    </div>
  );
};

export default FeedItemActions;
