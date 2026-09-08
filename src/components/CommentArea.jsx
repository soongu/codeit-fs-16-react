import CommentForm from "./CommentForm";
import FeedItemComments from "./FeedItemComments";

const CommentArea = () => {
  return (
    <div className='postComments'>
      <FeedItemComments commentCount={128} />
      <CommentForm />
    </div>
  );
};

export default CommentArea;