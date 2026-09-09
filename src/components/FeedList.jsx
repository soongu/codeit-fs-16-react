// ~/instagram-react/src/components/FeedList.jsx
import styles from './FeedList.module.scss';
import gridStyles from './PostGrid.module.scss';
import FeedItem from './FeedItem.jsx';

const FeedList = ({ posts, onDelete }) => {
  if (posts.length === 0) {
    return <p className={gridStyles.noPosts}>게시물이 없습니다.</p>;
  }

  return (
    <div className={styles.feedList}>
      {posts.map((post) => (
        <FeedItem
          key={post.id}
          username={post.username}
          profileImage={post.profileImage}
          postImage={post.postImage}
          postAlt={post.postAlt}
          content={post.content}
          minutesAgo={post.minutesAgo}
          likeCount={post.likeCount}
          commentCount={post.commentCount}
          onDelete={() => onDelete(post.id)}
        />
      ))}
    </div>
  );
};

export default FeedList;
