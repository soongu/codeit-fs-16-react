// ~/instagram-react/src/utils/debounce.js

export function debounce(callback, delay) {
  let timer;

  return (...param) => { 
    clearTimeout(timer);
    timer = setTimeout(() => callback(...param), delay);
  };

}
