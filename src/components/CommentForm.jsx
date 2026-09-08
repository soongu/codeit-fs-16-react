// ~/instagram-react/src/components/CommentForm.jsx
const CommentForm = () => {
  return (
    <form
      className='commentForm'
      onSubmit={(event) => event.preventDefault()}>
      <input
        type='text'
        placeholder='댓글 달기...'
        className='commentInput'
      />
      <button
        type='submit'
        className='commentSubmit'>
        게시
      </button>
    </form>
  );
};

export default CommentForm;
