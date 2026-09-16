import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './App.jsx';
import { PostsProvider } from './contexts/PostsContext.jsx';
import { BrowserRouter } from 'react-router';
import Practice3 from './lab/p2-18/practice3.jsx';

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <BrowserRouter>
      <PostsProvider>
        {/* <App /> */}
        <Practice3 />
      </PostsProvider>
    </BrowserRouter>
  </StrictMode>,
);
