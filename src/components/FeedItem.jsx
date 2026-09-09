// ~/instagram-react/src/components/FeedItem.jsx
import FeedItemHeader from './FeedItemHeader.jsx';
import FeedItemActions from './FeedItemActions.jsx';
import FeedItemContent from './FeedItemContent.jsx';
import FeedItemComments from './FeedItemComments.jsx';
import CommentForm from './CommentForm.jsx';
import CommentArea from './CommentArea.jsx';

import styles from './FeedItem.module.scss';
import carousel from './Carousel.module.scss';

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
    <article className={styles.post}>
      <FeedItemHeader
        username={username}
        profileImage={profileImage}
      />

      <div className={styles.imageContainer}>
        <div className={carousel.carouselSlide}>
          <img
            src={postImage}
            alt={postAlt}
          />
        </div>
      </div>

      <FeedItemActions likeCount={likeCount} />

      <div className={styles.content}>
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