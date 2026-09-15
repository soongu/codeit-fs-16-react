// ~/instagram-rea ct/src/components/CommentForm.jsx
import { useState } from 'react';
import styles from './FeedItem.module.scss';
import { usePostsContext } from '../contexts/PostsContext';


const CommentForm = ({ postId }) => {
  const { countUpComment } = usePostsContext();

  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === '') {
      return;
    }

    countUpComment(postId);
    setText('');
  };

  return (
    <form
      className={styles.commentForm}
      onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='댓글 달기...'
        className={styles.commentInput}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        type='submit'
        className={styles.commentSubmit}
        disabled={text.trim() === ''}>
        게시
      </button>
    </form>
  );
};

export default CommentForm;
