// ~/instagram-rea ct/src/components/CommentForm.jsx
import { useState } from 'react';
import styles from './FeedItem.module.scss';


const CommentForm = () => {

  const [text, setText] = useState('');

  const handleSubmit = event => { 
    event.preventDefault();
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
        onChange={(event) => {
          setText(event.target.value);
        }}
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
