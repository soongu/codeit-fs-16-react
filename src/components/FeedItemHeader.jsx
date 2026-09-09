// ~/instagram-react/src/components/FeedItemHeader.jsx'
import styles from './FeedItem.module.scss';
import { FaEllipsis } from 'react-icons/fa6';

const FeedItemHeader = ({
  postId,
  username,
  profileImage = 'https://picsum.photos/seed/default/40/40',
  onDelete
}) => {
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
        onClick={() => onDelete(postId)}
      >
        <FaEllipsis />
      </button>
    </header>
  );
};

export default FeedItemHeader;
