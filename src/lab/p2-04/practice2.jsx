import { useState } from "react";

const CommentCounter = () => { 

  const [commentCount, setCommentCount] = useState(128);
  
  return (
    <div className='postComments'>
      <div className='commentSection'>
        <button
          type='button'
          className='viewCommentsButton'>
          댓글 {commentCount.toLocaleString()}개 보기
        </button>
      </div>
      <button
        type='button'
        className='commentSubmit'
        onClick={() => { 
          setCommentCount(c => c + 1);
        }}
      >
        게시
      </button>
    </div>
  );
};

export default CommentCounter;