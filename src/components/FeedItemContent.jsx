// ~/instagram-react/src/components/FeedItemContent.jsx
import FeedItemCaption from './FeedItemCaption.jsx';
import styles from './FeedItem.module.scss';

const FeedItemContent = ({ username, content, minutesAgo }) => {
  return (
    <div className={styles.text}>
      <a
        href={`/${username}`}
        className={styles.username}>
        {username}
      </a>
      <FeedItemCaption
        content={content}
        minutesAgo={minutesAgo}
      />
    </div>
  );
};

export default FeedItemContent;
