// ~/instagram-react/src/components/StoryItem.jsx
import styles from './Stories.module.scss';

const StoryItem = ({ username, profileImage }) => {
  return (
    <div className={styles.storyItem}>
      <div className={styles.storyAvatar}>
        <div className={styles.storyRing}></div>
        <img
          src={profileImage}
          alt={`${username}의 스토리`}
        />
      </div>
      <span className={styles.storyUsername}>{username}</span>
    </div>
  );
};

export default StoryItem;
