import { Navigate, Route, Routes } from 'react-router';
import FeedPage from './pages/FeedPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import RootLayout from './layouts/RootLayout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const App = () => { 
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<FeedPage />} />
          <Route
            path='/:username'
            element={<ProfilePage />}
          />
          <Route
            path='*'
            element={
              <Navigate
                to='/'
                replace
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};


export default App;
