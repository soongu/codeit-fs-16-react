// ~/instagram-react/src/components/Sidebar.jsx
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { FaHouse, FaRegSquarePlus } from 'react-icons/fa6';
import { usePostsContext } from '../contexts/PostsContext.jsx';
import InstagramLogo from './InstagramLogo.jsx';
import CreateFeedModal from './CreateFeedModal.jsx';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { addPost } = usePostsContext();

  const navigate = useNavigate();

  const handleCreate = (createdPost) => { 
    addPost(createdPost);
    navigate('/');
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Link
          to='/'
          className={styles.logo}>
          <InstagramLogo />
        </Link>
      </div>

      <div className={styles.menuContainer}>
        <NavLink
          to='/'
          end
          className={styles.menuItem}>
          <FaHouse size={24} />
          <span className={styles.menuText}>홈</span>
        </NavLink>

        <button
          type='button'
          className={styles.menuItem}
          onClick={() => setIsCreateOpen(true)}>
          <FaRegSquarePlus size={24} />
          <span className={styles.menuText}>만들기</span>
        </button>

        <NavLink
          to='/jaehoon'
          className={styles.menuItem}>
          <div className={styles.profileImage}>
            <img
              src='https://picsum.photos/seed/jaehoon/40/40'
              alt='프로필'
            />
          </div>
          <span className={styles.menuText}>프로필</span>
        </NavLink>
      </div>

      {isCreateOpen && (
        <CreateFeedModal
          onClose={() => setIsCreateOpen(false)}
          onCreate={handleCreate}
        />
      )}
    </nav>
  );
}

export default Sidebar;
