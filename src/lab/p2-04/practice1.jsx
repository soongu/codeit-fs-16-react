// ~/instagram-react/src/lab/practice1.jsx
const StoryBody = ({ username, profileImage }) => {
  return (
    <>
      <div className='storyAvatar'>
        <div className='storyRing'></div>
        <img
          src={profileImage}
          alt={`${username}의 스토리`}
        />
      </div>
      <span className='storyUsername'>{username}</span>
    </>
  );
};

const StoryItem = ({ username, profileImage }) => {
  return (
    <div className='storyItem'>
      <StoryBody
        username={username}
        profileImage={profileImage}
      />
    </div>
  );
};

const StoryList = ({ children }) => {
  return <div className='storiesList'>{children}</div>;
};

const Stories = () => {
  return (
    <StoryList>
      <StoryItem
        username='minji'
        profileImage='https://picsum.photos/seed/minji/56/56'
      />
      <StoryItem
        username='seungwoo'
        profileImage='https://picsum.photos/seed/seungwoo/56/56'
      />
    </StoryList>
  );
};

export default Stories;
