// ~/instagram-react/src/components/FeedItemActions.jsx
import { useState } from "react";


const FeedItemActions = ({ likeCount }) => {

  const [liked, setLiked] = useState(false);

  let [count, setCount] = useState(likeCount);

  return (
    <div className='actions'>
      <div className='actionButtons'>
        <div className='leftButtons'>
          <button
            type='button'
            className='actionButton'
            onClick={() => { 
              setLiked(prevLiked => !prevLiked);
              setCount((prevCount) => prevCount + 1);
              setCount((prevCount) => prevCount + 1);
            }}
          >
            {liked ? "♥" : "♡"}
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
        좋아요 <span>{count.toLocaleString()}</span>개
      </div>
    </div>
  );
};

export default FeedItemActions;
