import { Route, Routes } from 'react-router';
import FeedPage from './pages/FeedPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

const App = () => { 
  return (
    <Routes>
      <Route path="/" element={<FeedPage />} />
      <Route path="/jaehoon" element={<ProfilePage />} />
    </Routes>
  );
};


export default App;
