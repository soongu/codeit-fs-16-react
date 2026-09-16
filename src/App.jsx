import { Route, Routes } from 'react-router';
import FeedPage from './pages/FeedPage.jsx';

const App = () => { 
  return (
    <Routes>
      <Route path="/" element={<FeedPage />} />
    </Routes>
  );
};


export default App;
