// ~/instagram-react/src/components/FeedItemActions.jsx
import { useState } from "react";


const FeedItemActions = ({ likeCount }) => {

  const [like, setLike] = useState({
    liked: false,
    count: likeCount
  });

  const handleLike = () => {
    setLike({
      ...like,
      liked: !like.liked,
      count: like.liked ? like.count - 1 : like.count + 1
    });
  };

  return (
    <div className='actions'>
      <div className='actionButtons'>
        <div className='leftButtons'>
          <button
            type='button'
            className='actionButton'
            onClick={handleLike}
          >
            {like.liked ? "♥" : "♡"}
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
        좋아요 <span>{like.count.toLocaleString()}</span>개
      </div>
    </div>
  );
};

export default FeedItemActions;
