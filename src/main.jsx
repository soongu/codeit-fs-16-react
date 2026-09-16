import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './App.jsx';
import { PostsProvider } from './contexts/PostsContext.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <BrowserRouter>
      <PostsProvider>
        <App />
      </PostsProvider>
    </BrowserRouter>
  </StrictMode>,
);
