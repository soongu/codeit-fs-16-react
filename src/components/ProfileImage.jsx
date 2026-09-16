// ~/instagram-react/src/components/ProfileImage.jsx
import styles from './ProfileImage.module.scss';

const ProfileImage = ({ imageUrl, username }) => {
  return (
    <div className={styles.profileImageContainer}>
      <div className={styles.profileImage}>
        <img
          src={imageUrl}
          alt={`${username}의 프로필`}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
