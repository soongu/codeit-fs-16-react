// ~/instagram-react/src/components/FeedItemActions.jsx
import { useState } from "react";
import styles from './FeedItem.module.scss';
import {
  FaHeart,
  FaRegBookmark,
  FaRegComment,
  FaRegHeart,
  FaRegPaperPlane,
} from 'react-icons/fa6';


const FeedItemActions = ({ likeCount }) => {

  console.log('FeedItemActions 실행');

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
            className={`${styles.actionButton} ${like.liked ? styles.liked : ''}`}
            onClick={handleLike}>
            {like.liked ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button
            type='button'
            className={styles.actionButton}>
            <FaRegComment />
          </button>
          <button
            type='button'
            className={styles.actionButton}>
            <FaRegPaperPlane />
          </button>
        </div>
        <button
          type='button'
          className={styles.actionButton}>
          <FaRegBookmark />
        </button>
      </div>
      <div className={styles.likes}>
        좋아요 <span>{like.count.toLocaleString()}</span>개
      </div>
    </div>
  );
};

export default FeedItemActions;
