
const CommentForm = () => { 

  return (
    <form
      className='comment-form'
      action='#'
      method='post'>
      <label
        htmlFor='comment'
        className='sr-only'>
        댓글 달기
      </label>
      <textarea
        id='comment'
        name='comment'
        rows='2'
        placeholder='댓글 달기...'></textarea>
      <button
        type='submit'
        class='btn-primary'>
        게시
      </button>
    </form>
  );
};

export default CommentForm;