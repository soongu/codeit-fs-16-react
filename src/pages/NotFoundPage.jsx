// ~/instagram-react/src/pages/NotFoundPage.jsx
import { useLocation } from 'react-router';
import styles from '../components/StatusMessage.module.scss';

function NotFoundPage() {

  const location = useLocation();
  console.log(location);

  return (
    <main className={styles.hashtagMain}>
      <p className={styles.emptyHint}>이런 주소는 없어요.</p>
    </main>
  );
}

export default NotFoundPage;
