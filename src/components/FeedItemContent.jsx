// ~/instagram-react/src/components/FeedItemContent.jsx
import FeedItemCaption from './FeedItemCaption.jsx';

const FeedItemContent = ({ username, content, minutesAgo }) => {
  return (
    <div className='text'>
      <a
        href={`/${username}`}
        className='username'>
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
