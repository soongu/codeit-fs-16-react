// ~/instagram-react/src/components/CreateFeedModal.jsx
import { FaImages, FaXmark } from 'react-icons/fa6';
import styles from './CreateFeedModal.module.scss';

const CreateFeedModal = ({ onClose }) => {
  
  // 파일 업로드 이벤트 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file.name, file.size, file.type);
  };

  return (
    <div className={styles.modalContainer}>
      <div
        className={styles.modalBackdrop}
        onClick={onClose}
      />

      <button
        className={styles.modalCloseButton}
        onClick={onClose}
        type='button'>
        <FaXmark />
      </button>

      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>새 게시물 만들기</h2>
        </div>

        <div className={styles.modalBody}>
          <div className={`${styles.step}${styles.active}`}>
            <div className={styles.uploadContainer}>
              <div className={styles.uploadArea}>
                <FaImages
                  size={48}
                  color='#262626'
                />
                <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
                <input
                  type='file'
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFeedModal;
