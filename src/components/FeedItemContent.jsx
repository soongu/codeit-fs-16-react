// ~/instagram-react/src/components/FeedItemContent.jsx
import FeedItemCaption from './FeedItemCaption.jsx';

const username = 'jaehoon';

const FeedItemContent = () => {
  return (
    <div className='text'>
      <a
        href='/jaehoon'
        className='username'>
        {username}
      </a>
      <FeedItemCaption />
    </div>
  );
};

export default FeedItemContent;
