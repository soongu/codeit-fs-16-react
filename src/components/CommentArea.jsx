import styles from './FeedItem.module.scss';
const CommentArea = ({ children }) => {
  return <div className={styles.postComments}>{children}</div>;
};

export default CommentArea;
