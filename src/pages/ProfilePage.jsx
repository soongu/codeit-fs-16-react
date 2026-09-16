// ~/instagram-react/src/pages/ProfilePage.jsx
import styles from '../components/ProfilePage.module.scss';
import stateStyles from '../components/StatusMessage.module.scss';
import ProfileImage from '../components/ProfileImage.jsx';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { profileApi } from '../services/api.js';

function ProfilePage() {

  const { username } = useParams();

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => { 

      setIsLoading(true);
      setError(null);

      try {
        const found = await profileApi.getProfile(username);
        setProfile(found[0] ?? null);
      } catch (err) {
        console.error('프로필을 가져오지 못했어요.', err);
        setError('프로필을 불러오지 못했습니다.');
      } finally {
        setIsLoading(false);
      }
    };
    loadProfile();
  }, [username]);


  if (isLoading) {
    return <p className={stateStyles.loadingText}>불러오는 중이에요…</p>;
  }

  if (error !== null) {
    return <p className={stateStyles.errorText}>{error}</p>;
  }

  if (profile === null) {
    return (
      <p className={stateStyles.errorText}>{username} 님의 프로필이 없어요.</p>
    );
  }

  return (
    <>
      <main className={styles.profileMain}>
        <header className={styles.profileHeader}>
          <ProfileImage
            imageUrl={profile.profileImage}
            username={profile.username}
          />

          <div className={styles.profileInfo}>
            <div className={styles.profileActions}>
              <h2 className={styles.username}>{profile.username}</h2>
            </div>

            <ul className={styles.profileStats}>
              <li>
                게시물{' '}
                <span className={styles.statsNumber}>{profile.postCount}</span>
              </li>
              <li>
                팔로워{' '}
                <span className={styles.statsNumber}>
                  {profile.followerCount}
                </span>
              </li>
              <li>
                팔로우{' '}
                <span className={styles.statsNumber}>
                  {profile.followingCount}
                </span>
              </li>
            </ul>

            <div className={styles.profileBio}>
              <span className={styles.fullName}>{profile.name}</span>
            </div>
          </div>
        </header>
      </main>
    </>
  );
}

export default ProfilePage;
