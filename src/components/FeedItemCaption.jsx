// ~/instagram-react/src/components/FeedItemCaption.jsx
const FeedItemCaption = ({ content, minutesAgo }) => {
  return (
    <>
      <span className='caption'>{content}</span>
      <div className='time'>{minutesAgo}분 전</div>
    </>
  );
};

export default FeedItemCaption;
