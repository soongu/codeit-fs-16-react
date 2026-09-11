// ~/instagram-react/src/components/CreateFeedModal.jsx
import { FaArrowLeft, FaImages, FaXmark, FaSpinner } from 'react-icons/fa6';
import styles from './CreateFeedModal.module.scss';
import { useState, useRef } from 'react';
import carousel from './Carousel.module.scss';
import api from '../services/api';

// 이미지를 문자열로 변환하는 헬퍼함수
const readAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });

const CreateFeedModal = ({ onClose, onCreate }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [isSending, setIsSending] = useState(false);

  const fileInputRef = useRef(null);

  // 파일 업로드 이벤트 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setSelectedFile(file);
    }

    fileInputRef.current.value = '';
  };

  // 컴퓨터에서 선택 버튼 클릭 이벤트 핸들러
  const handlePick = () => {
    // input.file을 대리로 클릭하게 만듬
    fileInputRef.current.click();
  };

  // 공유하기 버튼을 눌렀을 때 이벤트 핸들러
  const handleShare = async () => {
    setIsSending(true);

    try {
      const postImage = await readAsDataUrl(selectedFile);

      const response = await api.post('/posts', {
        username: 'soongu',
        profileImage: 'https://picsum.photos/seed/soongu/40/40',
        postImage,
        postAlt: '내가 올린 사진',
        content: '하하호호 새로운 피드!!',
        minutesAgo: 0,
        likeCount: 0,
        commentCount: 0,
      });

      onCreate(response.data);
      onClose();
    } catch (error) {
      console.error('게시물을 올리지 못했어요.', error);
      setIsSending(false);
    }
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
          <button
            className={styles.backButton}
            style={{ visibility: 'hidden' }}
            type='button'>
            <FaArrowLeft />
          </button>

          <h2 className={styles.modalTitle}>새 게시물 만들기</h2>

          {previewUrl && (
            <button
              className={`${styles.nextButton} ${isSending ? styles.loading : ''}`}
              onClick={handleShare}
              disabled={isSending}
              type='button'>
              공유하기
            </button>
          )}

          {isSending && (
            <div className={styles.loadingSpinner}>
              <FaSpinner />
            </div>
          )}
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
