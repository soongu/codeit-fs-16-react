import { NavLink, Outlet, Route, Routes } from "react-router";
import styles from './practice3.module.scss';

const ParentLayout = () => { 
  return (
    <>
      <nav>
        <NavLink
          className={styles.store}
          to='/가게' end>
          가게로 이동
        </NavLink>
        <br />
        <NavLink
          className={styles.store}
          to='/가게/신상'>
          신상으로 이동
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

const Practice3 = () => {
  return (
    <Routes>
      <Route path="/가게" element={<ParentLayout />}>
        <Route
          index
          element={<h2>가게에 온 것을 환영해요</h2>}
        />
        <Route
          path='신상'
          element={<h2>새로 들어온 것이에요</h2>}
        />
      </Route>
    </Routes>
  );
};

export default Practice3;
