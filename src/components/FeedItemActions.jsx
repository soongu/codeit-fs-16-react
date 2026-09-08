// ~/instagram-react/src/components/FeedItemActions.jsx

const FeedItemActions = ({ likeCount }) => {
  return (
    <div className='actions'>
      <div className='actionButtons'>
        <div className='leftButtons'>
          <button
            type='button'
            className='actionButton'>
            ♡
          </button>
          <button
            type='button'
            className='actionButton'>
            💬
          </button>
          <button
            type='button'
            className='actionButton'>
            ↗
          </button>
        </div>
        <button
          type='button'
          className='actionButton'>
          🔖
        </button>
      </div>
      <div className='likes'>
        좋아요 <span>{likeCount.toLocaleString()}</span>개
      </div>
    </div>
  );
};

export default FeedItemActions;
