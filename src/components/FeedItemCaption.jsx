
const content = '오늘 한강 노을 실화?';
const minutesAgo = 10;

const FeedItemCaption = () => {
  return (
    <>
      <span className='caption'>{content}</span>
      <div className='time'>
        {minutesAgo}분 전
      </div>
    </>
  );
};

export default FeedItemCaption;
