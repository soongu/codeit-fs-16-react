// ~/instagram-react/src/components/FeedItemHeader.jsx
const FeedItemHeader = ({
  username,
  profileImage = 'https://picsum.photos/seed/default/40/40',
}) => {
  return (
    <header className='header'>
      <div className='userInfo'>
        <a
          href={`/${username}`}
          className='profileLink'>
          <div className='profileImage'>
            <img
              src={profileImage}
              alt={`${username}의 프로필`}
            />
          </div>
        </a>
        <div className='userDetails'>
          <a
            href={`/${username}`}
            className='username'>
            {username}
          </a>
        </div>
      </div>
      <button className='optionsButton'>⋯</button>
    </header>
  );
};

export default FeedItemHeader;
