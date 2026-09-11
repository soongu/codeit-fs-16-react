// ~/instagram-react/src/services/api.js
import axios from 'axios';

const POSTS = '/posts';
const STORIES = '/stories';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.response.use((response) => response.data);

export const postApi = {
  getPage: (query, options) => api.get(`${POSTS}?${query}`, options),
  create: (post) => api.post(POSTS, post),
  remove: (id) => api.delete(`${POSTS}/${id}`),
  updateLikeCount: (id, likeCount) =>
    api.patch(`${POSTS}/${id}`, { likeCount }),
};

export const storyApi = {
  getAll: () => api.get(STORIES),
};



export default api;
