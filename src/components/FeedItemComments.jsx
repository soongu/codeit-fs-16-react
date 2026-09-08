// ~/instagram-react/src/components/FeedItemComments.jsx
const FeedItemComments = ({ commentCount }) => {
  return (
    <div className='commentSection'>
      <button
        type='button'
        className='viewCommentsButton'>
        댓글 {commentCount.toLocaleString()}개 보기
      </button>
    </div>
  );
};

export default FeedItemComments;
