// ~/instagram-react/src/components/FeedItem.jsx
import FeedItemHeader from './FeedItemHeader.jsx';
import FeedItemActions from './FeedItemActions.jsx';
import FeedItemContent from './FeedItemContent.jsx';
import FeedItemComments from './FeedItemComments.jsx';
import CommentForm from './CommentForm.jsx';
import CommentArea from './CommentArea.jsx';

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

      <CommentArea>
        <FeedItemComments commentCount={commentCount} />
        <CommentForm />
      </CommentArea>
    </article>
  );
};


export default FeedItem;