// ~/instagram-react/src/components/Stories.jsx
import styles from './Stories.module.scss';
import StoryItem from './StoryItem.jsx';

const stories = [
  { id: 1, username: 'jaehoon', unseen: true },
  { id: 2, username: 'minji', unseen: true },
  { id: 3, username: 'seungwoo', unseen: false },
  { id: 4, username: 'yuna', unseen: true },
  { id: 5, username: 'dohyun', unseen: false },
  { id: 6, username: 'ssong', unseen: true },
  { id: 7, username: 'hyerin', unseen: false },
  { id: 8, username: 'taeyang', unseen: true },
];

const Stories = () => {
  return (
    <div className={styles.storiesContainer}>
      <div className={styles.storiesList}>
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            username={story.username}
            profileImage={`https://picsum.photos/seed/${story.username}/50/50`}
            unseen={story.unseen}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
