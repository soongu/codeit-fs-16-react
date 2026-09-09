// ~/instagram-react/src/components/Stories.jsx
import styles from './Stories.module.scss';
import StoryItem from './StoryItem.jsx';

const stories = [
  { id: 1, username: 'jaehoon' },
  { id: 2, username: 'minji' },
  { id: 3, username: 'seungwoo' },
  { id: 4, username: 'yuna' },
  { id: 5, username: 'dohyun' },
  { id: 6, username: 'ssong' },
  { id: 7, username: 'hyerin' },
  { id: 8, username: 'taeyang' },
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
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
