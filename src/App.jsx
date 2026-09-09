import FeedItem from "./components/FeedItem.jsx";
import styles from './components/FeedList.module.scss';

const App = () => {

  return (

    <div className={styles.feedList}>
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

      <FeedItem
        username='minji'
        profileImage='https://picsum.photos/seed/minji/40/40'
        postImage='https://picsum.photos/seed/post2/600/600'
        postAlt='골목 카페 창가 사진'
        content='퇴근길에 발견한 카페 ☕'
        minutesAgo={8}
        likeCount={87}
        commentCount={12}
      />
    </div>
  );
}

export default App;