// ~/instagram-react/src/components/CreateFeedModal.jsx
import { FaImages, FaXmark } from 'react-icons/fa6';
import styles from './CreateFeedModal.module.scss';
import { useState, useRef } from 'react';
import carousel from './Carousel.module.scss';

const CreateFeedModal = ({ onClose }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileInputRef = useRef(null);

  // 파일 업로드 이벤트 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
    fileInputRef.current.value = '';
  };

  // 컴퓨터에서 선택 버튼 클릭 이벤트 핸들러
  const handlePick = () => { 
    // input.file을 대리로 클릭하게 만듬
    fileInputRef.current.click();
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
              <input
                id='fileInput'
                ref={fileInputRef}
                type='file'
                accept='image/jpeg,image/png,image/gif,image/webp,image/avif'
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />

              {previewUrl ? (
                <>
                  <div className={styles.previewContainer}>
                    <div className={styles.previewArea}>
                      <div className={carousel.carouselSlide}>
                        <img
                          src={previewUrl}
                          alt='고른 사진 미리보기'
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className={styles.uploadButton}
                    onClick={handlePick}
                    type='button'>
                    다른 사진 고르기
                  </button>
                </>
              ) : (
                <div className={styles.uploadArea}>
                  <FaImages
                    size={48}
                    color='#262626'
                  />
                  <p>사진과 동영상을 여기에 끌어다 놓으세요</p>

                  <button
                    className={styles.uploadButton}
                    onClick={handlePick}
                    type='button'>
                    컴퓨터에서 선택
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFeedModal;
