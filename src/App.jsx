import { Route, Routes } from 'react-router';
import FeedPage from './pages/FeedPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import Sidebar from './components/Sidebar.jsx';

const App = () => { 
  return (
    <>
      <Sidebar />

      <Routes>
        <Route
          path='/'
          element={<FeedPage />}
        />
        <Route
          path='/:username'
          element={<ProfilePage />}
        />
      </Routes>
    </>
  );
};


export default App;
