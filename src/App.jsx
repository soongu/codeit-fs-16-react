import { Route, Routes } from 'react-router';
import FeedPage from './pages/FeedPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import RootLayout from './layouts/RootLayout.jsx';

const App = () => { 
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route
            path="/"
            element={<FeedPage />}
          />
          <Route
            path='/:username'
            element={<ProfilePage />}
          />
        </Route>
        
      </Routes>
    </>
  );
};


export default App;
