// ~/instagram-react/src/components/FeedItem.jsx
import FeedItemHeader from './FeedItemHeader.jsx';
import FeedItemActions from './FeedItemActions.jsx';
import FeedItemContent from './FeedItemContent.jsx';

const FeedItem = () => {
  return (
    <article className='post'>
      <FeedItemHeader />

      <div className='imageContainer'>
        <img
          src='https://picsum.photos/seed/post1/600/600'
          alt='한강에서 찍은 노을 사진'
        />
      </div>

      <FeedItemActions />

      <div className='content'>
        <FeedItemContent />
      </div>
    </article>
  );
};

export default FeedItem;
