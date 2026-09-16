// ~/instagram-react/src/pages/NotFoundPage.jsx
import { useLocation } from 'react-router';
import styles from '../components/StatusMessage.module.scss';

function NotFoundPage() {

  const location = useLocation();

  return (
    <main className={styles.hashtagMain}>
      <p className={styles.emptyHint}>
        이런 주소는 없어요 — {decodeURIComponent(location.pathname)}
      </p>
    </main>
  );
}

export default NotFoundPage;
