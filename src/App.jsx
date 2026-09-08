import FeedItem from "./components/FeedItem.jsx";

function App() {
  return (
    <>
      <FeedItem
        username='jaehoon'
        profileImage='https://picsum.photos/seed/jaehoon/40/40'
        postImage='https://picsum.photos/seed/post1/600/600'
        postAlt='한강에서 찍은 노을 사진'
        content='오늘 한강 노을 실화냐 🌇'
        minutesAgo={32}
        likeCount={1240}
        commentCount={128}
      />
    </>
  );
}

export default App;