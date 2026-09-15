// ~/instagram-react/src/components/FeedItemHeader.jsx'
import { useContext } from 'react';
import styles from './FeedItem.module.scss';
import { FaEllipsis } from 'react-icons/fa6';
import { PostsContext } from '../contexts/PostsContext';

const FeedItemHeader = ({
  postId,
  username,
  profileImage = 'https://picsum.photos/seed/default/40/40'
}) => {

  const { removePost } = useContext(PostsContext);

  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        <a
          href={`/${username}`}
          className={styles.profileLink}>
          <div className={styles.profileImage}>
            <img
              src={profileImage}
              alt={`${username}의 프로필`}
            />
          </div>
        </a>
        <div className={styles.userDetails}>
          <a
            href={`/${username}`}
            className={styles.username}>
            {username}
          </a>
        </div>
      </div>
      <button
        className={styles.optionsButton}
        onClick={() => removePost(postId)}>
        <FaEllipsis />
      </button>
    </header>
  );
};

export default FeedItemHeader;
