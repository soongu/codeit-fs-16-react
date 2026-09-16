// ~/instagram-react/src/components/Sidebar.jsx
import { Link, NavLink } from 'react-router';
import { FaHouse } from 'react-icons/fa6';
import InstagramLogo from './InstagramLogo.jsx';
import styles from './Sidebar.module.scss';

function Sidebar() {


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
          className={styles.menuItem}>
          <FaHouse size={24} />
          <span className={styles.menuText}>홈</span>
        </NavLink>

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
    </nav>
  );
}

export default Sidebar;
