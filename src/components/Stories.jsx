// ~/instagram-react/src/components/Stories.jsx
import { useState, useEffect } from 'react';
import api from '../services/api.js';
import styles from './Stories.module.scss';
import StoryItem from './StoryItem.jsx';


const Stories = ({ onSelect }) => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    
    (async () => {
      try {
        const response = await api.get('/stories');
        setStories(response.data);
      } catch (error) {
        console.error('스토리를 가져오지 못했어요.', error);
      }
    })();

  }, []);
  

  return (
    <div className={styles.storiesContainer}>
      <div className={styles.storiesList}>
        {stories.map((story) => (
          <StoryItem
            key={story.id}
            username={story.username}
            profileImage={`https://picsum.photos/seed/${story.username}/50/50`}
            unseen={story.unseen}
            onSelect={() => onSelect(story.username)}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
