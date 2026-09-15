// ~/instagram-react/src/components/FeedList.jsx
import styles from './FeedList.module.scss';
import gridStyles from './PostGrid.module.scss';
import FeedItem from './FeedItem.jsx';
import { usePostsContext } from '../contexts/PostsContext.jsx';


const FeedSkeleton = () => (
  <div className={styles.skeletonPost}>
    <div className={styles.skeletonHeader}>
      <div className={styles.skeletonAvatar} />
      <div className={styles.skeletonUsername} />
    </div>
    <div className={styles.skeletonImage} />
    <div className={styles.skeletonFooter}>
      <div className={styles.skeletonIconGroup}>
        <div className={styles.skeletonIcon} />
        <div className={styles.skeletonIcon} />
        <div className={styles.skeletonIcon} />
      </div>
      <div className={styles.skeletonTextLine} />
      <div className={styles.skeletonTextLineShort} />
    </div>
  </div>
);



const FeedList = () => {


  const { posts, isLoading, loaderRef } = usePostsContext();

  if (!isLoading && posts.length === 0) {
    return <p className={gridStyles.noPosts}>게시물이 없습니다.</p>;
  }

  return (
    <>
      <div className={styles.feedList}>
        {posts.map((post) => (
          <FeedItem
            key={post.id}
            postId={post.id}
            username={post.username}
            profileImage={post.profileImage}
            postImage={post.postImage}
            postAlt={post.postAlt}
            content={post.content}
            minutesAgo={post.minutesAgo}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
          />
        ))}
      </div>
      <div
        ref={loaderRef}
        className={styles.loader}>
        {isLoading && (
          <>
            <FeedSkeleton />
            <FeedSkeleton />
          </>
        )}
      </div>
    </>
  );
};

export default FeedList;
