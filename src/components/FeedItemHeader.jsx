// ~/instagram-react/src/components/FeedItemHeader.jsx
const FeedItemHeader = () => {
  return (
    <header className='header'>
      <div className='userInfo'>
        <a
          href='/jaehoon'
          className='profileLink'>
          <div className='profileImage'>
            <img
              src='https://picsum.photos/seed/jaehoon/40/40'
              alt='jaehoon의 프로필'
            />
          </div>
        </a>
        <div className='userDetails'>
          <a
            href='/jaehoon'
            className='username'>
            jaehoon
          </a>
        </div>
      </div>
      <button className='optionsButton'>⋯</button>
    </header>
  );
};

export default FeedItemHeader;
