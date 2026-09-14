// ~/instagram-react/src/components/UserSearch.jsx
import { useState, useMemo } from 'react';
import styles from './SearchPanel.module.scss';
import { debounce } from 'lodash';

const UserSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  
  const searchLater = useMemo(() => debounce(onSearch, 400), [onSearch]); 
  
  const handleInputChange = (event) => {

    setQuery(event.target.value);
    searchLater(event.target.value);
  };

  return (
    <div className={styles.searchInputContainer}>
      <input
        type='text'
        className={styles.searchInput}
        placeholder='검색'
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default UserSearch;
