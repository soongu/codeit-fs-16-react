// ~/instagram-react/src/components/FeedItem.jsx
import FeedItemHeader from './FeedItemHeader.jsx';
import FeedItemActions from './FeedItemActions.jsx';
import FeedItemContent from './FeedItemContent.jsx';

const FeedItem = ({
  username,
  profileImage,
  postImage,
  postAlt,
  content,
  minutesAgo,
  likeCount,
  commentCount,
}) => {
  return (
    <article className='post'>
      <FeedItemHeader
        username={username}
        profileImage={profileImage}
      />

      <div className='imageContainer'>
        <img
          src={postImage}
          alt={postAlt}
        />
      </div>

      <FeedItemActions likeCount={likeCount} />

      <div className='content'>
        <FeedItemContent
          username={username}
          content={content}
          minutesAgo={minutesAgo}
        />
      </div>
    </article>
  );
};


export default FeedItem;