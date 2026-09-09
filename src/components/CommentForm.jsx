// ~/instagram-react/src/components/CommentForm.jsx
import styles from './FeedItem.module.scss';

const CommentForm = () => {
  return (
    <form
      className={styles.commentForm}
      onSubmit={(event) => event.preventDefault()}>
      <input
        type='text'
        placeholder='댓글 달기...'
        className={styles.commentInput}
      />
      <button
        type='submit'
        className={styles.commentSubmit}>
        게시
      </button>
    </form>
  );
};

export default CommentForm;
