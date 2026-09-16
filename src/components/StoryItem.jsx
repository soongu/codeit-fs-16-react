// ~/instagram-react/src/components/StoryItem.jsx
import { usePostsContext } from '../contexts/PostsContext';
import styles from './Stories.module.scss';

const StoryItem = ({ username, profileImage, unseen }) => {
  
  const { selectUser } = usePostsContext();

  return (
    <div
      className={styles.storyItem}
      onClick={() => selectUser(username)}>
      <div className={styles.storyAvatar}>
        {unseen && <div className={styles.storyRing}></div>}
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
