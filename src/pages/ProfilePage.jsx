// ~/instagram-react/src/pages/ProfilePage.jsx
import styles from '../components/ProfilePage.module.scss';
import ProfileImage from '../components/ProfileImage.jsx';
import { useParams } from 'react-router';
import { useEffect } from 'react';

function ProfilePage() {

  const { username } = useParams();

  useEffect(() => {
    const loadProfile = async () => { 
      await fetch('http://localhost:3001/profiles?username=' + username);
    };

    loadProfile();
  
  }, []);
  

  return (
    <>
      <main className={styles.profileMain}>
        <header className={styles.profileHeader}>
          <ProfileImage
            imageUrl={''}
            username={username}
          />

          <div className={styles.profileInfo}>
            <div className={styles.profileActions}>
              <h2 className={styles.username}>{username}</h2>
            </div>

            <ul className={styles.profileStats}>
              <li>
                게시물{' '}
                <span className={styles.statsNumber}>{1}</span>
              </li>
              <li>
                팔로워{' '}
                <span className={styles.statsNumber}>
                  {1}
                </span>
              </li>
              <li>
                팔로우{' '}
                <span className={styles.statsNumber}>
                  {1}
                </span>
              </li>
            </ul>

            <div className={styles.profileBio}>
              <span className={styles.fullName}>{'하하호호'}</span>
            </div>
          </div>
        </header>
      </main>
    </>
  );
}

export default ProfilePage;
