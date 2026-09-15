import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './App.jsx';
import { PostsProvider } from './contexts/PostsContext.jsx';

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </StrictMode>,
);
